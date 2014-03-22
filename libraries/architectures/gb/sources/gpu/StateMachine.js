define( [

    'virtjs'

], function ( Virtjs ) {

    return Virtjs.ClassUtil.extend( {

        initialize : function ( gpu ) {

            this._gpu = gpu;

        },

        setup : function ( ) {

            this._clock = 0;
            this._line = 0;

            this._mode = 2;
            this._state = this._oam;

        },

        step : function ( cycles ) {

            this._clock += cycles;

            this._state( );

        },

        _hblank : function ( ) {

            if ( this._clock < 51 )
                return ;

            this._clock = 0;
            this._line += 1;

            if ( this._line < 144 ) {

                this._mode = 2;
                this._state = this._oam;

            } else {

                this._gpu._vblank( );

                this._mode = 1;
                this._state = this._vblank;

            }

        },

        _vblank : function ( ) {

            if ( this._clock < 114 )
                return ;

            this._clock = 0;
            this._line += 1;

            if ( this._line < 154 )
                return ;

            this._line = 0;

            this._mode = 2;
            this._state = this._oam;

        },

        _oam : function ( ) {

            if ( this._clock < 20 )
                return ;

            this._clock = 0;

            this._mode = 3;
            this._state = this._vram;

        },

        _vram : function ( ) {

            if ( this._clock < 43 )
                return ;

            this._clock = 0;

            this._gpu._hblank( this._line );

            this._mode = 0;
            this._state = this._hblank;

        }

    } );

} );
