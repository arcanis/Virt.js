export class MBC5 {

    constructor( ) {

        this._environment = null;

        this._romBanks = [ ];
        this._ramBanks = [ ];

        this._romBank00 = null;
        this._romBankNN = null;
        this._ramBankNN = null;

    }

    link( { } ) {

    }

    setup( environment  ) {

        this._environment = environment;

        for ( var romBank = 0; romBank * 0x4000 < this._environment.romBuffer.byteLength; ++ romBank )
            this._romBanks[ romBank ] = new Uint8Array( this._environment.romBuffer, romBank * 0x4000, 0x4000 );

        for ( var ramBank = 0; ramBank * 0x2000 < this._environment.ramBuffer.byteLength; ++ ramBank )
            this._ramBanks[ ramBank ] = new Uint8Array( this._environment.ramBuffer, ramBank * 0x2000, 0x2000 );

        this._romBank00 = this._romBanks[ 0x00 ];

        this._rebank( );

    }

    readRomUint8( address ) {

        if ( address < 0x4000 ) {
            return this._romBank00[ address ] | 0;
        } else {
            return this._romBankNN[ address - 0x4000 ] | 0;
        }

    }

    readRamUint8( address ) {

        if ( this._environment.mbcRamFeature ) {
            return this._ramBankNN[ address ] | 0;
        } else {
            return 0;
        }

    }

    writeRomUint8( address, value ) {

        if ( address < 0x2000 ) {

            this._environment.mbcRamFeature = ( value & 0x0A ) === 0x0A;

        } else if ( address < 0x3000 ) {

            this._environment.mbcRomBank &= 0x100;
            this._environment.mbcRomBank |= value;

            this._rebank( );

        } else if ( address < 0x4000 ) {

            this._environment.mbcRomBank &= 0x0FF;
            this._environment.mbcRomBank |= ( value & 0x01 ) << 8;

            this._rebank( );

        } else {

            this._environment.mbcRamBank = value & 0x0F;

            this._rebank( );

        }

    }

    writeRamUint8( address, value ) {

        if ( this._environment.mbcRamFeature ) {
            this._ramBankNN[ address ] = value;
        }

    }

    _rebank( ) {

        var romBank = this._environment.mbcRomBank;
        var ramBank = this._environment.mbcRamBank;

        this._romBankNN = this._romBanks[ romBank ];
        this._ramBankNN = this._ramBanks[ ramBank ];

    }

}
