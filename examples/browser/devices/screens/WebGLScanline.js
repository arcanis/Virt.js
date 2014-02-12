define( [

], function ( ) {

    var fragmentShaderCode = [
        'precision mediump float;',
        '',
        'varying vec2 vTextureCoordinates;',
        '',
        'uniform sampler2D uSampler;',
        '',
        'void main( void ) {',
        '    gl_FragColor = texture2D( uSampler, vec2( vTextureCoordinates.s, 1.0 - vTextureCoordinates.t ) );',
        '}'
    ].join( '\n' );

    var vertexShaderCode = [
        'attribute vec3 aVertexPosition;',
        'attribute vec2 aVertexTexture;',
        '',
        'varying vec2 vTextureCoordinates;',
        '',
        'void main( void ) {',
        '    gl_Position = vec4( aVertexPosition, 1.0 );',
        '    vTextureCoordinates = aVertexTexture;',
        '}'
    ].join( '\n' );

    var WebGLScanline = function ( options ) {

        this._options = options || { };

        this._canvas2D = document.createElement( 'canvas' );
        this._context2D = this._canvas2D.getContext( '2d' );

        this._canvas = document.createElement( 'canvas' );
        this._context = this._canvas.getContext( 'experimental-webgl' );

        this._textures = [ this._createTexture( ), this._createTexture( ) ];

        this._fragmentShader = this._createShader( this._context.FRAGMENT_SHADER, fragmentShaderCode );
        this._vertexShader = this._createShader( this._context.VERTEX_SHADER, vertexShaderCode );

        this._vertexPositionBuffer = this._createBuffer( this._context.ARRAY_BUFFER, 4, new Float32Array( [ -1, -1, 0, /**/ 1, -1, 0, /**/ 1, 1, 0, /**/ -1, 1, 0 ] ) );
        this._vertexTextureBuffer = this._createBuffer( this._context.ARRAY_BUFFER, 4, new Float32Array( [ 0, 0, /**/ 1, 0, /**/ 1, 1, /**/ 0, 1 ] ) );
        this._vertexIndexBuffer = this._createBuffer( this._context.ELEMENT_ARRAY_BUFFER, 4, new Uint16Array( [ 0, 1, 3, 2 ] ) );

        this._linkShaders( this._fragmentShader, this._vertexShader );

        if ( this._options.className ) {
            this._canvas.className = this._options.className;
        }

    };

    WebGLScanline.prototype.open = function ( element ) {

        element.appendChild( this._canvas );

    };

    WebGLScanline.prototype.setSize = function ( width, height ) {

        this._context.viewport( 0, 0, width, height );

        this._canvas.width = this._canvas2D.width = width;
        this._canvas.height = this._canvas2D.height = height;

        this._data = this._context2D.getImageData( 0, 0, width, height );

    };

    WebGLScanline.prototype.setPixel = function ( x, y, color ) {

        var target = this._data.data;
        var index = ( y * this._canvas2D.width + x ) * 4;

        target[ index + 0 ] = color[ 0 ];
        target[ index + 1 ] = color[ 1 ];
        target[ index + 2 ] = color[ 2 ];
        target[ index + 3 ] = 255;

    };

    WebGLScanline.prototype.flushScreen = function ( ) {

        this._context2D.putImageData( this._data, 0, 0 );

        this._draw( );

    };

    WebGLScanline.prototype._createTexture = function (  ) {

        var texture = this._context.createTexture( );

        return texture;

    };

    WebGLScanline.prototype._createShader = function ( type, source ) {

        var shader = this._context.createShader( type );
        this._context.shaderSource( shader, source );
        this._context.compileShader( shader );

        if ( ! this._context.getShaderParameter( shader, this._context.COMPILE_STATUS ) ) {
            var error = this._context.getShaderInfoLog( shader );
            throw new Error( 'Shader compilation failed : ' + error );
        }

        return shader;

    };

    WebGLScanline.prototype._createBuffer = function ( target, count, content ) {

        var buffer = this._context.createBuffer( );
        buffer.bufferTarget = target;
        buffer.itemCount = count;
        buffer.itemSize = content.length / count;

        this._context.bindBuffer( buffer.bufferTarget, buffer );
        this._context.bufferData( buffer.bufferTarget, content, this._context.STATIC_DRAW );

        return buffer;

    };

    WebGLScanline.prototype._linkShaders = function ( ) {

        var shaderProgram = this._shaderProgram = this._context.createProgram( );
        this._context.attachShader( shaderProgram, this._vertexShader );
        this._context.attachShader( shaderProgram, this._fragmentShader );
        this._context.linkProgram( shaderProgram );

        if ( ! this._context.getProgramParameter( shaderProgram, this._context.LINK_STATUS ) )
            throw new Error( 'Shader linking failed' );

        this._context.useProgram( shaderProgram );

        this._samplerUniform = this._context.getUniformLocation(shaderProgram, "uSample");
        this._context.uniform1i( this._samplerUniform, 0 );

        this._vertexPositionAttribute = this._context.getAttribLocation( shaderProgram, 'aVertexPosition' );
        this._context.enableVertexAttribArray( this._vertexPositionAttribute );

        this._vertexTextureAttribute = this._context.getAttribLocation( shaderProgram, 'aVertexTexture' );
        this._context.enableVertexAttribArray( this._vertexTextureAttribute );

    };

    WebGLScanline.prototype._draw = function ( ) {

        this._context.clear( this._context.COLOR_BUFFER_BIT | this._context.DEPTH_BUFFER_BIT );

        this._context.bindBuffer( this._vertexPositionBuffer.bufferTarget, this._vertexPositionBuffer );
        this._context.vertexAttribPointer( this._vertexPositionAttribute, this._vertexPositionBuffer.itemSize, this._context.FLOAT, false, 0, 0 );

        this._context.bindBuffer( this._vertexTextureBuffer.bufferTarget, this._vertexTextureBuffer );
        this._context.vertexAttribPointer( this._vertexTextureAttribute, this._vertexTextureBuffer.itemSize, this._context.FLOAT, false, 0, 0 );

        this._context.activeTexture( this._context.TEXTURE0 );
        this._context.bindTexture( this._context.TEXTURE_2D, this._textures[ 0 ] );
        this._context.texImage2D( this._context.TEXTURE_2D, 0, this._context.RGBA, this._context.RGBA, this._context.UNSIGNED_BYTE, this._canvas2D );
        this._context.texParameteri( this._context.TEXTURE_2D, this._context.TEXTURE_MAG_FILTER, this._context.NEAREST );
        this._context.texParameteri( this._context.TEXTURE_2D, this._context.TEXTURE_MIN_FILTER, this._context.LINEAR );
        this._context.texParameteri( this._context.TEXTURE_2D, this._context.TEXTURE_WRAP_S, this._context.CLAMP_TO_EDGE );
        this._context.texParameteri( this._context.TEXTURE_2D, this._context.TEXTURE_WRAP_T, this._context.CLAMP_TO_EDGE );

        this._context.bindBuffer( this._vertexIndexBuffer.bufferTarget, this._vertexIndexBuffer );
        this._context.drawElements( this._context.TRIANGLE_STRIP, this._vertexIndexBuffer.itemCount, this._context.UNSIGNED_SHORT, 0 );

    };

    return WebGLScanline;

} );
