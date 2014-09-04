export var i8_t  = { };
export var u8_t  = { };
export var u16_t = { };

export var standard = {

    0x00 : [ 'NOP', [ ] ],
    0x01 : [ 'LD_r16_u16', [ 'bc', u16_t ] ],
    0x02 : [ 'LD_(r16)_r8', [ 'bc', 'a' ] ],
    0x03 : [ 'INC_r16', [ 'bc' ] ],
    0x04 : [ 'INC_r8', [ 'b' ] ],
    0x05 : [ 'DEC_r8', [ 'b' ] ],
    0x06 : [ 'LD_r8_u8', [ 'b', u8_t ] ],
    0x07 : [ 'RLCA', [ ] ],
    0x08 : [ 'LD_(u16)_r16', [ u16_t, 'sp' ] ],
    0x09 : [ 'ADD_r16_r16', [ 'hl', 'bc' ] ],
    0x0A : [ 'LD_r8_(r16)', [ 'a', 'bc' ] ],
    0x0B : [ 'DEC_r16', [ 'bc' ] ],
    0x0C : [ 'INC_r8', [ 'c' ] ],
    0x0D : [ 'DEC_r8', [ 'c' ] ],
    0x0E : [ 'LD_r8_u8', [ 'c', u8_t ] ],
    0x0F : [ 'RRCA', [ ] ],

    0x10 : [ 'STOP_u8', [ u8_t ], { final : true } ],
    0x11 : [ 'LD_r16_u16', [ 'de', u16_t ] ],
    0x12 : [ 'LD_(r16)_r8', [ 'de', 'a' ] ],
    0x13 : [ 'INC_r16', [ 'de' ] ],
    0x14 : [ 'INC_r8', [ 'd' ] ],
    0x15 : [ 'DEC_r8', [ 'd' ] ],
    0x16 : [ 'LD_r8_u8', [ 'd', u8_t ] ],
    0x17 : [ 'RLA', [ ] ],
    0x18 : [ 'JR_i8', [ i8_t ], { final : true } ],
    0x19 : [ 'ADD_r16_r16', [ 'hl', 'de' ] ],
    0x1A : [ 'LD_r8_(r16)', [ 'a', 'de' ] ],
    0x1B : [ 'DEC_r16', [ 'de' ] ],
    0x1C : [ 'INC_r8', [ 'e' ] ],
    0x1D : [ 'DEC_r8', [ 'e' ] ],
    0x1E : [ 'LD_r8_u8', [ 'e', u8_t ] ],
    0x1F : [ 'RRA', [ ] ],

    0x20 : [ 'JR_NZ_i8', [ i8_t ] ],
    0x21 : [ 'LD_r16_u16', [ 'hl', u16_t ] ],
    0x22 : [ 'LDI_(r16)_r8', [ 'hl', 'a' ] ],
    0x23 : [ 'INC_r16', [ 'hl' ] ],
    0x24 : [ 'INC_r8', [ 'h' ] ],
    0x25 : [ 'DEC_r8', [ 'h' ] ],
    0x26 : [ 'LD_r8_u8', [ 'h', u8_t ] ],
    0x27 : [ 'DAA', [ ] ],
    0x28 : [ 'JR_Z_i8', [ i8_t ] ],
    0x29 : [ 'ADD_r16_r16', [ 'hl', 'hl' ] ],
    0x2A : [ 'LDI_r8_(r16)', [ 'a', 'hl' ] ],
    0x2B : [ 'DEC_r16', [ 'hl' ] ],
    0x2C : [ 'INC_r8', [ 'l' ] ],
    0x2D : [ 'DEC_r8', [ 'l' ] ],
    0x2E : [ 'LD_r8_u8', [ 'l', u8_t ] ],
    0x2F : [ 'CPL_r8', [ 'a' ] ],

    0x30 : [ 'JR_NC_i8', [ i8_t ] ],
    0x31 : [ 'LD_r16_u16', [ 'sp', u16_t ] ],
    0x32 : [ 'LDD_(r16)_r8', [ 'hl', 'a' ] ],
    0x33 : [ 'INC_r16', [ 'sp' ] ],
    0x34 : [ 'INC_(r16)', [ 'hl' ] ],
    0x35 : [ 'DEC_(r16)', [ 'hl' ] ],
    0x36 : [ 'LD_(r16)_u8', [ 'hl', u8_t ] ],
    0x37 : [ 'SCF', [ ] ],
    0x38 : [ 'JR_C_i8', [ i8_t ] ],
    0x39 : [ 'ADD_r16_r16', [ 'hl', 'sp' ] ],
    0x3A : [ 'LDD_r8_(r16)', [ 'a', 'hl' ] ],
    0x3B : [ 'DEC_r16', [ 'sp' ] ],
    0x3C : [ 'INC_r8', [ 'a' ] ],
    0x3D : [ 'DEC_r8', [ 'a' ] ],
    0x3E : [ 'LD_r8_u8', [ 'a', u8_t ] ],
    0x3F : [ 'CCF', [ ] ],

    0x40 : [ 'LD_r8_r8', [ 'b', 'b' ] ],
    0x41 : [ 'LD_r8_r8', [ 'b', 'c' ] ],
    0x42 : [ 'LD_r8_r8', [ 'b', 'd' ] ],
    0x43 : [ 'LD_r8_r8', [ 'b', 'e' ] ],
    0x44 : [ 'LD_r8_r8', [ 'b', 'h' ] ],
    0x45 : [ 'LD_r8_r8', [ 'b', 'l' ] ],
    0x46 : [ 'LD_r8_(r16)', [ 'b', 'hl' ] ],
    0x47 : [ 'LD_r8_r8', [ 'b', 'a' ] ],
    0x48 : [ 'LD_r8_r8', [ 'c', 'b' ] ],
    0x49 : [ 'LD_r8_r8', [ 'c', 'c' ] ],
    0x4A : [ 'LD_r8_r8', [ 'c', 'd' ] ],
    0x4B : [ 'LD_r8_r8', [ 'c', 'e' ] ],
    0x4C : [ 'LD_r8_r8', [ 'c', 'h' ] ],
    0x4D : [ 'LD_r8_r8', [ 'c', 'l' ] ],
    0x4E : [ 'LD_r8_(r16)', [ 'c', 'hl' ] ],
    0x4F : [ 'LD_r8_r8', [ 'c', 'a' ] ],

    0x50 : [ 'LD_r8_r8', [ 'd', 'b' ] ],
    0x51 : [ 'LD_r8_r8', [ 'd', 'c' ] ],
    0x52 : [ 'LD_r8_r8', [ 'd', 'd' ] ],
    0x53 : [ 'LD_r8_r8', [ 'd', 'e' ] ],
    0x54 : [ 'LD_r8_r8', [ 'd', 'h' ] ],
    0x55 : [ 'LD_r8_r8', [ 'd', 'l' ] ],
    0x56 : [ 'LD_r8_(r16)', [ 'd', 'hl' ] ],
    0x57 : [ 'LD_r8_r8', [ 'd', 'a' ] ],
    0x58 : [ 'LD_r8_r8', [ 'e', 'b' ] ],
    0x59 : [ 'LD_r8_r8', [ 'e', 'c' ] ],
    0x5A : [ 'LD_r8_r8', [ 'e', 'd' ] ],
    0x5B : [ 'LD_r8_r8', [ 'e', 'e' ] ],
    0x5C : [ 'LD_r8_r8', [ 'e', 'h' ] ],
    0x5D : [ 'LD_r8_r8', [ 'e', 'l' ] ],
    0x5E : [ 'LD_r8_(r16)', [ 'e', 'hl' ] ],
    0x5F : [ 'LD_r8_r8', [ 'e', 'a' ] ],

    0x60 : [ 'LD_r8_r8', [ 'h', 'b' ] ],
    0x61 : [ 'LD_r8_r8', [ 'h', 'c' ] ],
    0x62 : [ 'LD_r8_r8', [ 'h', 'd' ] ],
    0x63 : [ 'LD_r8_r8', [ 'h', 'e' ] ],
    0x64 : [ 'LD_r8_r8', [ 'h', 'h' ] ],
    0x65 : [ 'LD_r8_r8', [ 'h', 'l' ] ],
    0x66 : [ 'LD_r8_(r16)', [ 'h', 'hl' ] ],
    0x67 : [ 'LD_r8_r8', [ 'h', 'a' ] ],
    0x68 : [ 'LD_r8_r8', [ 'l', 'b' ] ],
    0x69 : [ 'LD_r8_r8', [ 'l', 'c' ] ],
    0x6A : [ 'LD_r8_r8', [ 'l', 'd' ] ],
    0x6B : [ 'LD_r8_r8', [ 'l', 'e' ] ],
    0x6C : [ 'LD_r8_r8', [ 'l', 'h' ] ],
    0x6D : [ 'LD_r8_r8', [ 'l', 'l' ] ],
    0x6E : [ 'LD_r8_(r16)', [ 'l', 'hl' ] ],
    0x6F : [ 'LD_r8_r8', [ 'l', 'a' ] ],

    0x70 : [ 'LD_(r16)_r8', [ 'hl', 'b' ] ],
    0x71 : [ 'LD_(r16)_r8', [ 'hl', 'c' ] ],
    0x72 : [ 'LD_(r16)_r8', [ 'hl', 'd' ] ],
    0x73 : [ 'LD_(r16)_r8', [ 'hl', 'e' ] ],
    0x74 : [ 'LD_(r16)_r8', [ 'hl', 'h' ] ],
    0x75 : [ 'LD_(r16)_r8', [ 'hl', 'l' ] ],
    0x76 : [ 'HALT', [ ], { final : true } ],
    0x77 : [ 'LD_(r16)_r8', [ 'hl', 'a' ] ],
    0x78 : [ 'LD_r8_r8', [ 'a', 'b' ] ],
    0x79 : [ 'LD_r8_r8', [ 'a', 'c' ] ],
    0x7A : [ 'LD_r8_r8', [ 'a', 'd' ] ],
    0x7B : [ 'LD_r8_r8', [ 'a', 'e' ] ],
    0x7C : [ 'LD_r8_r8', [ 'a', 'h' ] ],
    0x7D : [ 'LD_r8_r8', [ 'a', 'l' ] ],
    0x7E : [ 'LD_r8_(r16)', [ 'a', 'hl' ] ],
    0x7F : [ 'LD_r8_r8', [ 'a', 'a' ] ],

    0x80 : [ 'ADD_r8_r8', [ 'a', 'b' ] ],
    0x81 : [ 'ADD_r8_r8', [ 'a', 'c' ] ],
    0x82 : [ 'ADD_r8_r8', [ 'a', 'd' ] ],
    0x83 : [ 'ADD_r8_r8', [ 'a', 'e' ] ],
    0x84 : [ 'ADD_r8_r8', [ 'a', 'h' ] ],
    0x85 : [ 'ADD_r8_r8', [ 'a', 'l' ] ],
    0x86 : [ 'ADD_r8_(r16)', [ 'a', 'hl' ] ],
    0x87 : [ 'ADD_r8_r8', [ 'a', 'a' ] ],
    0x88 : [ 'ADC_r8_r8', [ 'a', 'b' ] ],
    0x89 : [ 'ADC_r8_r8', [ 'a', 'c' ] ],
    0x8A : [ 'ADC_r8_r8', [ 'a', 'd' ] ],
    0x8B : [ 'ADC_r8_r8', [ 'a', 'e' ] ],
    0x8C : [ 'ADC_r8_r8', [ 'a', 'h' ] ],
    0x8D : [ 'ADC_r8_r8', [ 'a', 'l' ] ],
    0x8E : [ 'ADC_r8_(r16)', [ 'a', 'hl' ] ],
    0x8F : [ 'ADC_r8_r8', [ 'a', 'a' ] ],

    0x90 : [ 'SUB_r8_r8', [ 'a', 'b' ] ],
    0x91 : [ 'SUB_r8_r8', [ 'a', 'c' ] ],
    0x92 : [ 'SUB_r8_r8', [ 'a', 'd' ] ],
    0x93 : [ 'SUB_r8_r8', [ 'a', 'e' ] ],
    0x94 : [ 'SUB_r8_r8', [ 'a', 'h' ] ],
    0x95 : [ 'SUB_r8_r8', [ 'a', 'l' ] ],
    0x96 : [ 'SUB_r8_(r16)', [ 'a', 'hl' ] ],
    0x97 : [ 'SUB_r8_r8', [ 'a', 'a' ] ],
    0x98 : [ 'SBC_r8_r8', [ 'a', 'b' ] ],
    0x99 : [ 'SBC_r8_r8', [ 'a', 'c' ] ],
    0x9A : [ 'SBC_r8_r8', [ 'a', 'd' ] ],
    0x9B : [ 'SBC_r8_r8', [ 'a', 'e' ] ],
    0x9C : [ 'SBC_r8_r8', [ 'a', 'h' ] ],
    0x9D : [ 'SBC_r8_r8', [ 'a', 'l' ] ],
    0x9E : [ 'SBC_r8_(r16)', [ 'a', 'hl' ] ],
    0x9F : [ 'SBC_r8_r8', [ 'a', 'a' ] ],

    0xA0 : [ 'AND_r8_r8', [ 'a', 'b' ] ],
    0xA1 : [ 'AND_r8_r8', [ 'a', 'c' ] ],
    0xA2 : [ 'AND_r8_r8', [ 'a', 'd' ] ],
    0xA3 : [ 'AND_r8_r8', [ 'a', 'e' ] ],
    0xA4 : [ 'AND_r8_r8', [ 'a', 'h' ] ],
    0xA5 : [ 'AND_r8_r8', [ 'a', 'l' ] ],
    0xA6 : [ 'AND_r8_(r16)', [ 'a', 'hl' ] ],
    0xA7 : [ 'AND_r8_r8', [ 'a', 'a' ] ],
    0xA9 : [ 'XOR_r8_r8', [ 'a', 'c' ] ],
    0xA8 : [ 'XOR_r8_r8', [ 'a', 'b' ] ],
    0xAA : [ 'XOR_r8_r8', [ 'a', 'd' ] ],
    0xAB : [ 'XOR_r8_r8', [ 'a', 'e' ] ],
    0xAC : [ 'XOR_r8_r8', [ 'a', 'h' ] ],
    0xAD : [ 'XOR_r8_r8', [ 'a', 'l' ] ],
    0xAE : [ 'XOR_r8_(r16)', [ 'a', 'hl' ] ],
    0xAF : [ 'XOR_r8_r8', [ 'a', 'a' ] ],

    0xB0 : [ 'OR_r8_r8', [ 'a', 'b' ] ],
    0xB1 : [ 'OR_r8_r8', [ 'a', 'c' ] ],
    0xB2 : [ 'OR_r8_r8', [ 'a', 'd' ] ],
    0xB3 : [ 'OR_r8_r8', [ 'a', 'e' ] ],
    0xB4 : [ 'OR_r8_r8', [ 'a', 'h' ] ],
    0xB5 : [ 'OR_r8_r8', [ 'a', 'l' ] ],
    0xB6 : [ 'OR_r8_(r16)', [ 'a', 'hl' ] ],
    0xB7 : [ 'OR_r8_r8', [ 'a', 'a' ] ],
    0xB8 : [ 'CP_r8_r8', [ 'a', 'b' ] ],
    0xB9 : [ 'CP_r8_r8', [ 'a', 'c' ] ],
    0xBA : [ 'CP_r8_r8', [ 'a', 'd' ] ],
    0xBB : [ 'CP_r8_r8', [ 'a', 'e' ] ],
    0xBC : [ 'CP_r8_r8', [ 'a', 'h' ] ],
    0xBD : [ 'CP_r8_r8', [ 'a', 'l' ] ],
    0xBE : [ 'CP_r8_(r16)', [ 'a', 'hl' ] ],
    0xBF : [ 'CP_r8_r8', [ 'a', 'a' ] ],

    0xC0 : [ 'RET_NZ', [ ] ],
    0xC1 : [ 'POP_r16', [ 'bc' ] ],
    0xC2 : [ 'JP_NZ_u16', [ u16_t ] ],
    0xC3 : [ 'JP_u16', [ u16_t ], { final : true } ],
    0xC4 : [ 'CALL_NZ_u16', [ u16_t ] ],
    0xC5 : [ 'PUSH_r16', [ 'bc' ] ],
    0xC6 : [ 'ADD_r8_u8', [ 'a', u8_t ] ],
    0xC7 : [ 'RST_u8', [ 0x00 ], { final : true } ],
    0xC8 : [ 'RET_Z', [ ] ],
    0xC9 : [ 'RET', [ ], { final : true } ],
    0xCA : [ 'JP_Z_u16', [ u16_t ] ],
    0xCB : [ 'PREFIX_CB', [ u8_t ] ],
    0xCC : [ 'CALL_Z_u16', [ u16_t ] ],
    0xCD : [ 'CALL_u16', [ u16_t ], { final : true, returns : true } ],
    0xCE : [ 'ADC_r8_u8', [ 'a', u8_t ] ],
    0xCF : [ 'RST_u8', [ 0x08 ], { final : true, returns : true } ],

    0xD0 : [ 'RET_NC', [ ] ],
    0xD1 : [ 'POP_r16', [ 'de' ] ],
    0xD2 : [ 'JP_NC_u16', [ u16_t ] ],
    0xD3 : [ null ],
    0xD4 : [ 'CALL_NC_u16', [ u16_t ] ],
    0xD5 : [ 'PUSH_r16', [ 'de' ] ],
    0xD6 : [ 'SUB_r8_u8', [ 'a', u8_t ] ],
    0xD7 : [ 'RST_u8', [ 0x10 ], { final : true, returns : true } ],
    0xD8 : [ 'RET_C', [ ] ],
    0xD9 : [ 'RETI', [ ], { final : true } ],
    0xDA : [ 'JP_C_u16', [ u16_t ] ],
    0xDB : [ null ],
    0xDC : [ 'CALL_C_u16', [ u16_t ] ],
    0xDD : [ null ],
    0xDE : [ 'SBC_r8_u8', [ 'a', u8_t ] ],
    0xDF : [ 'RST_u8', [ 0x18 ], { final : true, returns : true } ],

    0xE0 : [ 'LDH_(u8)_r8', [ u8_t, 'a' ] ],
    0xE1 : [ 'POP_r16', [ 'hl' ] ],
    0xE2 : [ 'LD_(r8)_r8', [ 'c', 'a' ] ],
    0xE3 : [ null ],
    0xE4 : [ null ],
    0xE5 : [ 'PUSH_r16', [ 'hl' ] ],
    0xE6 : [ 'AND_r8_u8', [ 'a', u8_t ] ],
    0xE7 : [ 'RST_u8', [ 0x20 ], { final : true, returns : true } ],
    0xE8 : [ 'ADD_r16_i8', [ 'sp', i8_t ] ],
    0xE9 : [ 'JP_r16', [ 'hl' ], { final : true } ],
    0xEA : [ 'LD_(u16)_r8', [ u16_t, 'a' ] ],
    0xEB : [ null ],
    0xEC : [ null ],
    0xED : [ null ],
    0xEE : [ 'XOR_r8_u8', [ 'a', u8_t ] ],
    0xEF : [ 'RST_u8', [ 0x28 ], { final : true, returns : true } ],

    0xF0 : [ 'LDH_r8_(u8)', [ 'a', u8_t ] ],
    0xF1 : [ 'POP_AF', [ ] ],
    0xF2 : [ 'LD_r8_(r8)', [ 'a', 'c' ] ],
    0xF3 : [ 'DI', [ ], { interrupts : false } ],
    0xF4 : [ null ],
    0xF5 : [ 'PUSH_r16', [ 'af' ] ],
    0xF6 : [ 'OR_r8_u8', [ 'a', u8_t ] ],
    0xF7 : [ 'RST_u8', [ 0x30 ], { final : true, returns : true } ],
    0xF8 : [ 'LDHL_r16_i8', [ 'sp', i8_t ] ],
    0xF9 : [ 'LD_r16_r16', [ 'sp', 'hl' ] ],
    0xFA : [ 'LD_r8_(u16)', [ 'a', u16_t ] ],
    0xFB : [ 'EI', [ ], { interrupts : true } ],
    0xFC : [ null ],
    0xFD : [ null ],
    0xFE : [ 'CP_r8_u8', [ 'a', u8_t ] ],
    0xFF : [ 'RST_u8', [ 0x38 ], { final : true, returns : true } ],

};

export var cb = {

    0x00 : [ 'RLC_r8', [ 'b' ] ],
    0x01 : [ 'RLC_r8', [ 'c' ] ],
    0x02 : [ 'RLC_r8', [ 'd' ] ],
    0x03 : [ 'RLC_r8', [ 'e' ] ],
    0x04 : [ 'RLC_r8', [ 'h' ] ],
    0x05 : [ 'RLC_r8', [ 'l' ] ],
    0x06 : [ 'RLC_(r16)', [ 'hl' ] ],
    0x07 : [ 'RLC_r8', [ 'a' ] ],
    0x08 : [ 'RRC_r8', [ 'b' ] ],
    0x09 : [ 'RRC_r8', [ 'c' ] ],
    0x0A : [ 'RRC_r8', [ 'd' ] ],
    0x0B : [ 'RRC_r8', [ 'e' ] ],
    0x0C : [ 'RRC_r8', [ 'h' ] ],
    0x0D : [ 'RRC_r8', [ 'l' ] ],
    0x0E : [ 'RRC_(r16)', [ 'hl' ] ],
    0x0F : [ 'RRC_r8', [ 'a' ] ],

    0x10 : [ 'RL_r8', [ 'b' ] ],
    0x11 : [ 'RL_r8', [ 'c' ] ],
    0x12 : [ 'RL_r8', [ 'd' ] ],
    0x13 : [ 'RL_r8', [ 'e' ] ],
    0x14 : [ 'RL_r8', [ 'h' ] ],
    0x15 : [ 'RL_r8', [ 'l' ] ],
    0x16 : [ 'RL_(r16)', [ 'hl' ] ],
    0x17 : [ 'RL_r8', [ 'a' ] ],
    0x18 : [ 'RR_r8', [ 'b' ] ],
    0x19 : [ 'RR_r8', [ 'c' ] ],
    0x1A : [ 'RR_r8', [ 'd' ] ],
    0x1B : [ 'RR_r8', [ 'e' ] ],
    0x1C : [ 'RR_r8', [ 'h' ] ],
    0x1D : [ 'RR_r8', [ 'l' ] ],
    0x1E : [ 'RR_(r16)', [ 'hl' ] ],
    0x1F : [ 'RR_r8', [ 'a' ] ],

    0x20 : [ 'SLA_r8', [ 'b' ] ],
    0x21 : [ 'SLA_r8', [ 'c' ] ],
    0x22 : [ 'SLA_r8', [ 'd' ] ],
    0x23 : [ 'SLA_r8', [ 'e' ] ],
    0x24 : [ 'SLA_r8', [ 'h' ] ],
    0x25 : [ 'SLA_r8', [ 'l' ] ],
    0x26 : [ 'SLA_(r16)', [ 'hl' ] ],
    0x27 : [ 'SLA_r8', [ 'a' ] ],
    0x28 : [ 'SRA_r8', [ 'b' ] ],
    0x29 : [ 'SRA_r8', [ 'c' ] ],
    0x2A : [ 'SRA_r8', [ 'd' ] ],
    0x2B : [ 'SRA_r8', [ 'e' ] ],
    0x2C : [ 'SRA_r8', [ 'h' ] ],
    0x2D : [ 'SRA_r8', [ 'l' ] ],
    0x2E : [ 'SRA_(r16)', [ 'hl' ] ],
    0x2F : [ 'SRA_r8', [ 'a' ] ],

    0x30 : [ 'SWAP_r8', [ 'b' ] ],
    0x31 : [ 'SWAP_r8', [ 'c' ] ],
    0x32 : [ 'SWAP_r8', [ 'd' ] ],
    0x33 : [ 'SWAP_r8', [ 'e' ] ],
    0x34 : [ 'SWAP_r8', [ 'h' ] ],
    0x35 : [ 'SWAP_r8', [ 'l' ] ],
    0x36 : [ 'SWAP_(r16)', [ 'hl' ] ],
    0x37 : [ 'SWAP_r8', [ 'a' ] ],
    0x38 : [ 'SRL_r8', [ 'b' ] ],
    0x39 : [ 'SRL_r8', [ 'c' ] ],
    0x3A : [ 'SRL_r8', [ 'd' ] ],
    0x3B : [ 'SRL_r8', [ 'e' ] ],
    0x3C : [ 'SRL_r8', [ 'h' ] ],
    0x3D : [ 'SRL_r8', [ 'l' ] ],
    0x3E : [ 'SRL_(r16)', [ 'hl' ] ],
    0x3F : [ 'SRL_r8', [ 'a' ] ],

    0x40 : [ 'BIT_u8_r8', [ 0, 'b' ] ],
    0x41 : [ 'BIT_u8_r8', [ 0, 'c' ] ],
    0x42 : [ 'BIT_u8_r8', [ 0, 'd' ] ],
    0x43 : [ 'BIT_u8_r8', [ 0, 'e' ] ],
    0x44 : [ 'BIT_u8_r8', [ 0, 'h' ] ],
    0x45 : [ 'BIT_u8_r8', [ 0, 'l' ] ],
    0x46 : [ 'BIT_u8_(r16)', [ 0, 'hl' ] ],
    0x47 : [ 'BIT_u8_r8', [ 0, 'a' ] ],
    0x48 : [ 'BIT_u8_r8', [ 1, 'b' ] ],
    0x49 : [ 'BIT_u8_r8', [ 1, 'c' ] ],
    0x4A : [ 'BIT_u8_r8', [ 1, 'd' ] ],
    0x4B : [ 'BIT_u8_r8', [ 1, 'e' ] ],
    0x4C : [ 'BIT_u8_r8', [ 1, 'h' ] ],
    0x4D : [ 'BIT_u8_r8', [ 1, 'l' ] ],
    0x4E : [ 'BIT_u8_(r16)', [ 1, 'hl' ] ],
    0x4F : [ 'BIT_u8_r8', [ 1, 'a' ] ],

    0x50 : [ 'BIT_u8_r8', [ 2, 'b' ] ],
    0x51 : [ 'BIT_u8_r8', [ 2, 'c' ] ],
    0x52 : [ 'BIT_u8_r8', [ 2, 'd' ] ],
    0x53 : [ 'BIT_u8_r8', [ 2, 'e' ] ],
    0x54 : [ 'BIT_u8_r8', [ 2, 'h' ] ],
    0x55 : [ 'BIT_u8_r8', [ 2, 'l' ] ],
    0x56 : [ 'BIT_u8_(r16)', [ 2, 'hl' ] ],
    0x57 : [ 'BIT_u8_r8', [ 2, 'a' ] ],
    0x58 : [ 'BIT_u8_r8', [ 3, 'b' ] ],
    0x59 : [ 'BIT_u8_r8', [ 3, 'c' ] ],
    0x5A : [ 'BIT_u8_r8', [ 3, 'd' ] ],
    0x5B : [ 'BIT_u8_r8', [ 3, 'e' ] ],
    0x5C : [ 'BIT_u8_r8', [ 3, 'h' ] ],
    0x5D : [ 'BIT_u8_r8', [ 3, 'l' ] ],
    0x5E : [ 'BIT_u8_(r16)', [ 3, 'hl' ] ],
    0x5F : [ 'BIT_u8_r8', [ 3, 'a' ] ],

    0x60 : [ 'BIT_u8_r8', [ 4, 'b' ] ],
    0x61 : [ 'BIT_u8_r8', [ 4, 'c' ] ],
    0x62 : [ 'BIT_u8_r8', [ 4, 'd' ] ],
    0x63 : [ 'BIT_u8_r8', [ 4, 'e' ] ],
    0x64 : [ 'BIT_u8_r8', [ 4, 'h' ] ],
    0x65 : [ 'BIT_u8_r8', [ 4, 'l' ] ],
    0x66 : [ 'BIT_u8_(r16)', [ 4, 'hl' ] ],
    0x67 : [ 'BIT_u8_r8', [ 4, 'a' ] ],
    0x68 : [ 'BIT_u8_r8', [ 5, 'b' ] ],
    0x69 : [ 'BIT_u8_r8', [ 5, 'c' ] ],
    0x6A : [ 'BIT_u8_r8', [ 5, 'd' ] ],
    0x6B : [ 'BIT_u8_r8', [ 5, 'e' ] ],
    0x6C : [ 'BIT_u8_r8', [ 5, 'h' ] ],
    0x6D : [ 'BIT_u8_r8', [ 5, 'l' ] ],
    0x6E : [ 'BIT_u8_(r16)', [ 5, 'hl' ] ],
    0x6F : [ 'BIT_u8_r8', [ 5, 'a' ] ],

    0x70 : [ 'BIT_u8_r8', [ 6, 'b' ] ],
    0x71 : [ 'BIT_u8_r8', [ 6, 'c' ] ],
    0x72 : [ 'BIT_u8_r8', [ 6, 'd' ] ],
    0x73 : [ 'BIT_u8_r8', [ 6, 'e' ] ],
    0x74 : [ 'BIT_u8_r8', [ 6, 'h' ] ],
    0x75 : [ 'BIT_u8_r8', [ 6, 'l' ] ],
    0x76 : [ 'BIT_u8_(r16)', [ 6, 'hl' ] ],
    0x77 : [ 'BIT_u8_r8', [ 6, 'a' ] ],
    0x78 : [ 'BIT_u8_r8', [ 7, 'b' ] ],
    0x79 : [ 'BIT_u8_r8', [ 7, 'c' ] ],
    0x7A : [ 'BIT_u8_r8', [ 7, 'd' ] ],
    0x7B : [ 'BIT_u8_r8', [ 7, 'e' ] ],
    0x7C : [ 'BIT_u8_r8', [ 7, 'h' ] ],
    0x7D : [ 'BIT_u8_r8', [ 7, 'l' ] ],
    0x7E : [ 'BIT_u8_(r16)', [ 7, 'hl' ] ],
    0x7F : [ 'BIT_u8_r8', [ 7, 'a' ] ],

    0x80 : [ 'RES_u8_r8', [ 0, 'b' ] ],
    0x81 : [ 'RES_u8_r8', [ 0, 'c' ] ],
    0x82 : [ 'RES_u8_r8', [ 0, 'd' ] ],
    0x83 : [ 'RES_u8_r8', [ 0, 'e' ] ],
    0x84 : [ 'RES_u8_r8', [ 0, 'h' ] ],
    0x85 : [ 'RES_u8_r8', [ 0, 'l' ] ],
    0x86 : [ 'RES_u8_(r16)', [ 0, 'hl' ] ],
    0x87 : [ 'RES_u8_r8', [ 0, 'a' ] ],
    0x88 : [ 'RES_u8_r8', [ 1, 'b' ] ],
    0x89 : [ 'RES_u8_r8', [ 1, 'c' ] ],
    0x8A : [ 'RES_u8_r8', [ 1, 'd' ] ],
    0x8B : [ 'RES_u8_r8', [ 1, 'e' ] ],
    0x8C : [ 'RES_u8_r8', [ 1, 'h' ] ],
    0x8D : [ 'RES_u8_r8', [ 1, 'l' ] ],
    0x8E : [ 'RES_u8_(r16)', [ 1, 'hl' ] ],
    0x8F : [ 'RES_u8_r8', [ 1, 'a' ] ],

    0x90 : [ 'RES_u8_r8', [ 2, 'b' ] ],
    0x91 : [ 'RES_u8_r8', [ 2, 'c' ] ],
    0x92 : [ 'RES_u8_r8', [ 2, 'd' ] ],
    0x93 : [ 'RES_u8_r8', [ 2, 'e' ] ],
    0x94 : [ 'RES_u8_r8', [ 2, 'h' ] ],
    0x95 : [ 'RES_u8_r8', [ 2, 'l' ] ],
    0x96 : [ 'RES_u8_(r16)', [ 2, 'hl' ] ],
    0x97 : [ 'RES_u8_r8', [ 2, 'a' ] ],
    0x98 : [ 'RES_u8_r8', [ 3, 'b' ] ],
    0x99 : [ 'RES_u8_r8', [ 3, 'c' ] ],
    0x9A : [ 'RES_u8_r8', [ 3, 'd' ] ],
    0x9B : [ 'RES_u8_r8', [ 3, 'e' ] ],
    0x9C : [ 'RES_u8_r8', [ 3, 'h' ] ],
    0x9D : [ 'RES_u8_r8', [ 3, 'l' ] ],
    0x9E : [ 'RES_u8_(r16)', [ 3, 'hl' ] ],
    0x9F : [ 'RES_u8_r8', [ 3, 'a' ] ],

    0xA0 : [ 'RES_u8_r8', [ 4, 'b' ] ],
    0xA1 : [ 'RES_u8_r8', [ 4, 'c' ] ],
    0xA2 : [ 'RES_u8_r8', [ 4, 'd' ] ],
    0xA3 : [ 'RES_u8_r8', [ 4, 'e' ] ],
    0xA4 : [ 'RES_u8_r8', [ 4, 'h' ] ],
    0xA5 : [ 'RES_u8_r8', [ 4, 'l' ] ],
    0xA6 : [ 'RES_u8_(r16)', [ 4, 'hl' ] ],
    0xA7 : [ 'RES_u8_r8', [ 4, 'a' ] ],
    0xA8 : [ 'RES_u8_r8', [ 5, 'b' ] ],
    0xA9 : [ 'RES_u8_r8', [ 5, 'c' ] ],
    0xAA : [ 'RES_u8_r8', [ 5, 'd' ] ],
    0xAB : [ 'RES_u8_r8', [ 5, 'e' ] ],
    0xAC : [ 'RES_u8_r8', [ 5, 'h' ] ],
    0xAD : [ 'RES_u8_r8', [ 5, 'l' ] ],
    0xAE : [ 'RES_u8_(r16)', [ 5, 'hl' ] ],
    0xAF : [ 'RES_u8_r8', [ 5, 'a' ] ],

    0xB0 : [ 'RES_u8_r8', [ 6, 'b' ] ],
    0xB1 : [ 'RES_u8_r8', [ 6, 'c' ] ],
    0xB2 : [ 'RES_u8_r8', [ 6, 'd' ] ],
    0xB3 : [ 'RES_u8_r8', [ 6, 'e' ] ],
    0xB4 : [ 'RES_u8_r8', [ 6, 'h' ] ],
    0xB5 : [ 'RES_u8_r8', [ 6, 'l' ] ],
    0xB6 : [ 'RES_u8_(r16)', [ 6, 'hl' ] ],
    0xB7 : [ 'RES_u8_r8', [ 6, 'a' ] ],
    0xB8 : [ 'RES_u8_r8', [ 7, 'b' ] ],
    0xB9 : [ 'RES_u8_r8', [ 7, 'c' ] ],
    0xBA : [ 'RES_u8_r8', [ 7, 'd' ] ],
    0xBB : [ 'RES_u8_r8', [ 7, 'e' ] ],
    0xBC : [ 'RES_u8_r8', [ 7, 'h' ] ],
    0xBD : [ 'RES_u8_r8', [ 7, 'l' ] ],
    0xBE : [ 'RES_u8_(r16)', [ 7, 'hl' ] ],
    0xBF : [ 'RES_u8_r8', [ 7, 'a' ] ],

    0xC0 : [ 'SET_u8_r8', [ 0, 'b' ] ],
    0xC1 : [ 'SET_u8_r8', [ 0, 'c' ] ],
    0xC2 : [ 'SET_u8_r8', [ 0, 'd' ] ],
    0xC3 : [ 'SET_u8_r8', [ 0, 'e' ] ],
    0xC4 : [ 'SET_u8_r8', [ 0, 'h' ] ],
    0xC5 : [ 'SET_u8_r8', [ 0, 'l' ] ],
    0xC6 : [ 'SET_u8_(r16)', [ 0, 'hl' ] ],
    0xC7 : [ 'SET_u8_r8', [ 0, 'a' ] ],
    0xC8 : [ 'SET_u8_r8', [ 1, 'b' ] ],
    0xC9 : [ 'SET_u8_r8', [ 1, 'c' ] ],
    0xCA : [ 'SET_u8_r8', [ 1, 'd' ] ],
    0xCB : [ 'SET_u8_r8', [ 1, 'e' ] ],
    0xCC : [ 'SET_u8_r8', [ 1, 'h' ] ],
    0xCD : [ 'SET_u8_r8', [ 1, 'l' ] ],
    0xCE : [ 'SET_u8_(r16)', [ 1, 'hl' ] ],
    0xCF : [ 'SET_u8_r8', [ 1, 'a' ] ],

    0xD0 : [ 'SET_u8_r8', [ 2, 'b' ] ],
    0xD1 : [ 'SET_u8_r8', [ 2, 'c' ] ],
    0xD2 : [ 'SET_u8_r8', [ 2, 'd' ] ],
    0xD3 : [ 'SET_u8_r8', [ 2, 'e' ] ],
    0xD4 : [ 'SET_u8_r8', [ 2, 'h' ] ],
    0xD5 : [ 'SET_u8_r8', [ 2, 'l' ] ],
    0xD6 : [ 'SET_u8_(r16)', [ 2, 'hl' ] ],
    0xD7 : [ 'SET_u8_r8', [ 2, 'a' ] ],
    0xD8 : [ 'SET_u8_r8', [ 3, 'b' ] ],
    0xD9 : [ 'SET_u8_r8', [ 3, 'c' ] ],
    0xDA : [ 'SET_u8_r8', [ 3, 'd' ] ],
    0xDB : [ 'SET_u8_r8', [ 3, 'e' ] ],
    0xDC : [ 'SET_u8_r8', [ 3, 'h' ] ],
    0xDD : [ 'SET_u8_r8', [ 3, 'l' ] ],
    0xDE : [ 'SET_u8_(r16)', [ 3, 'hl' ] ],
    0xDF : [ 'SET_u8_r8', [ 3, 'a' ] ],

    0xE0 : [ 'SET_u8_r8', [ 4, 'b' ] ],
    0xE1 : [ 'SET_u8_r8', [ 4, 'c' ] ],
    0xE2 : [ 'SET_u8_r8', [ 4, 'd' ] ],
    0xE3 : [ 'SET_u8_r8', [ 4, 'e' ] ],
    0xE4 : [ 'SET_u8_r8', [ 4, 'h' ] ],
    0xE5 : [ 'SET_u8_r8', [ 4, 'l' ] ],
    0xE6 : [ 'SET_u8_(r16)', [ 4, 'hl' ] ],
    0xE7 : [ 'SET_u8_r8', [ 4, 'a' ] ],
    0xE8 : [ 'SET_u8_r8', [ 5, 'b' ] ],
    0xE9 : [ 'SET_u8_r8', [ 5, 'c' ] ],
    0xEA : [ 'SET_u8_r8', [ 5, 'd' ] ],
    0xEB : [ 'SET_u8_r8', [ 5, 'e' ] ],
    0xEC : [ 'SET_u8_r8', [ 5, 'h' ] ],
    0xED : [ 'SET_u8_r8', [ 5, 'l' ] ],
    0xEE : [ 'SET_u8_(r16)', [ 5, 'hl' ] ],
    0xEF : [ 'SET_u8_r8', [ 5, 'a' ] ],

    0xF0 : [ 'SET_u8_r8', [ 6, 'b' ] ],
    0xF1 : [ 'SET_u8_r8', [ 6, 'c' ] ],
    0xF2 : [ 'SET_u8_r8', [ 6, 'd' ] ],
    0xF3 : [ 'SET_u8_r8', [ 6, 'e' ] ],
    0xF4 : [ 'SET_u8_r8', [ 6, 'h' ] ],
    0xF5 : [ 'SET_u8_r8', [ 6, 'l' ] ],
    0xF6 : [ 'SET_u8_(r16)', [ 6, 'hl' ] ],
    0xF7 : [ 'SET_u8_r8', [ 6, 'a' ] ],
    0xF8 : [ 'SET_u8_r8', [ 7, 'b' ] ],
    0xF9 : [ 'SET_u8_r8', [ 7, 'c' ] ],
    0xFA : [ 'SET_u8_r8', [ 7, 'd' ] ],
    0xFB : [ 'SET_u8_r8', [ 7, 'e' ] ],
    0xFC : [ 'SET_u8_r8', [ 7, 'h' ] ],
    0xFD : [ 'SET_u8_r8', [ 7, 'l' ] ],
    0xFE : [ 'SET_u8_(r16)', [ 7, 'hl' ] ],
    0xFF : [ 'SET_u8_r8', [ 7, 'a' ] ]

};
