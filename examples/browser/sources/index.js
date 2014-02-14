/*global Virtjs, require*/

require( [

    'architectures/gb/index',

    'devices/inputs/Keyboard',
    'devices/screens/WebGL',
    'devices/timers/RAFrame'

], function ( ) {

    var GB = Virtjs.engine.GameBoy;

    var AZERTY = { 65 : GB.A,    90 : GB.B,  13 : GB.START, 32 : GB.SELECT
                 , 37 : GB.LEFT, 38 : GB.UP, 39 : GB.RIGHT, 40 : GB.DOWN };

    var start = function ( ) {

        // Instanciates a few input / output devices which will be used by the emulator
        var screen = new Virtjs.screen.WebGL( { className : 'screen' } );
        screen.open( document.body );

        var keyboard = new Virtjs.input.Keyboard( AZERTY );
        keyboard.open( document.body );

        var timer = new Virtjs.timer.RAFrame( );

        // Using these optional dependencies allows to customizes the actual source code without degrading performances.
        Virtjs.DebugUtil.setEscodegen( window.escodegen );
        Virtjs.DebugUtil.setEsprima( window.esprima );

        // This done, we can ask Virt.js to create an emulator based on specified options
        var engine = window.engine = Virtjs.create( GB, {
            screen : screen,
            timer : timer,
            keyboard : keyboard,
            skipBios : true
        } );

        // Finally, we start the engine. Its clock will be managed by the `Timer` instance.
        engine.start( xhr.response );

    };

    var xhr = new XMLHttpRequest( );
    xhr.open( 'GET', '../assets/gb/tetris.gb', true );
    xhr.onload = start;
    xhr.responseType = 'arraybuffer';
    xhr.send( null );

} );
