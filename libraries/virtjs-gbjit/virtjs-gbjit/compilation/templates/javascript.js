export var templates = {

    'NOP' : ( address, nextAddress, parameters, h ) => `

        ${h.applyClockCycles(4)};

    `,

    'DI' : ( address, nextAddress, parameters, h ) => `

        environment.cpuInterruptFeature = false;

        ${h.applyClockCycles(4)};

    `,

    'EI' : ( address, nextAddress, parameters, h ) => `

        environment.cpuInterruptFeature = true;

        ${h.applyClockCycles(4)};

    `,

    'PUSH_r16' : ( address, nextAddress, parameters, h ) => `

        ${h.pushStack(h.readR16(parameters[0]))};

        ${h.applyClockCycles(16)};

    `,

    'POP_r16' : ( address, nextAddress, parameters, h ) => `

        var value;
        ${h.popStack('value')};
        ${h.writeR16(parameters[0], 'value')};

        ${h.applyClockCycles(12)};

    `,

    'POP_AF' : ( address, nextAddress, parameters, h ) => `

        var value;
        ${h.popStack('value')};
        ${h.writeR16('af', 'value & 0xFFF0')};

        ${h.applyClockCycles(12)};

    `,

    'LD_r16_r16' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR16(parameters[0], h.readR16(parameters[1]))};

        ${h.applyClockCycles(8)};

    `,

    'LD_r16_u16' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR16(parameters[0], parameters[1])};

        ${h.applyClockCycles(12)};

    `,

    'LD_r8_r8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR8(parameters[0], h.readR8(parameters[1]))};

        ${h.applyClockCycles(4)};

    `,

    'LD_r8_u8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR8(parameters[0], parameters[1])};

        ${h.applyClockCycles(8)};

    `,

    'LD_r8_(u16)' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR8(parameters[0], h.readMem8(parameters[1]))};

        ${h.applyClockCycles(16)};

    `,

    'LD_(u16)_r8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeMem8(parameters[0], h.readR8(parameters[1]))};

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LD_(u16)_r16' : ( address, nextAddress, parameters, h ) => `

        ${h.writeMem16(h.readR16(parameters[0]), h.readR16(parameters[1]))};

        ${h.applyClockCycles(20)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LD_(r16)_u8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeMem8(h.readR16(parameters[0]), parameters[1])};

        ${h.applyClockCycles(12)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LD_(r16)_r8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeMem8(h.readR16(parameters[0]), h.readR8(parameters[1]))};

        ${h.applyClockCycles(8)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LD_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR8(parameters[0], h.readMem8(h.readR16(parameters[1])))};

        ${h.applyClockCycles(8)};

    `,

    'LD_r8_(r8)' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR8(parameters[0], h.readMem8(h.add16(0xFF00, h.readR8(parameters[1]))))};

        ${h.applyClockCycles(8)};

    `,

    'LD_(r8)_r8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeMem8(h.add16(0xFF00, h.readR8(parameters[0])), h.readR8(parameters[1]))};

        ${h.applyClockCycles(8)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LDH_r8_(u8)' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR8(parameters[0], h.readMem8(h.add16(0xFF00, parameters[1])))};

        ${h.applyClockCycles(8)};

    `,

    'LDH_(u8)_r8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeMem8(h.add16(0xFF00, parameters[0]), h.readR8(parameters[1]))};

        ${h.applyClockCycles(8)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LDHL_r16_i8' : ( address, nextAddress, parameters, h ) => `

        var hlBefore = ${h.readR16(parameters[0])};
        ${h.writeR16('hl', h.add16('hlBefore', parameters[1]))};
        var hlAfter = ${h.readR16('hl')};

        ${h.bcd(false)};
        ${h.zero(false)};
        ${h.half('hlAfter', '<', 'hlBefore')};
        ${h.carry('hlAfter', '<', 'hlBefore')};

        ${h.applyClockCycles(12)};

    `,

    'LDI_(r16)_r8' : ( address, nextAddress, parameters, h ) => `

        var position = ${h.readR16(parameters[0])};
        ${h.writeMem8('position', h.readR8(parameters[1]))};

        ${h.writeR16(parameters[0], h.add16('position', 1))}

        ${h.applyClockCycles(8)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LDI_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var position = ${h.readR16(parameters[1])};
        ${h.writeR8(parameters[0], h.readMem8('position'))};

        ${h.writeR16(parameters[1], h.add16('position', 1))};

        ${h.applyClockCycles(8)};

    `,

    'LDD_(r16)_r8' : ( address, nextAddress, parameters, h ) => `

        var position = ${h.readR16(parameters[0])};
        ${h.writeMem8('position', h.readR8(parameters[1]))};

        ${h.writeR16(parameters[0], h.sub16('position', 1))}

        ${h.applyClockCycles(8)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'LDD_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var position = ${h.readR16(parameters[1])};
        ${h.writeR8(parameters[0], h.readMem8('position'))};

        ${h.writeR16(parameters[1], h.sub16('position', 1))};

        ${h.applyClockCycles(8)};

    `,

    'CCF' : ( address, nextAddress, parameters, h ) => `

        ${h.bcd(false)};
        ${h.half(false)};

        if (${h.carry()}) {
            ${h.carry(false)};
        } else {
            ${h.carry(true)};
        }

        ${h.applyClockCycles(4)};

    `,

    'SCF' : ( address, nextAddress, parameters, h ) => `

        ${h.bcd(false)};
        ${h.half(false)};
        ${h.carry(true)};

        ${h.applyClockCycles(4)};

    `,

    'DAA' : ( address, nextAddress, parameters, h ) => `

        var tmpA = ${h.readR8('a')};
        var correction = 0;

        if (${h.half()})
            correction |= 0x06;
        if (${h.carry()})
            correction |= 0x60;

        if (${h.bcd()}) {

            ${h.writeR8('a', h.sub8('tmpA', 'correction'))};

        } else {

            if ((tmpA & 0x0F) > 0x09)
                correction |= 0x06;
            if ((tmpA & 0xFF) > 0x99)
                correction |= 0x60;

            ${h.writeR8('a', h.add8('tmpA', 'correction'))}

        }

        ${h.zero(h.readR8('a'))};
        ${h.half(false)};

        if (correction & 0x60) {
            ${h.carry(true)}
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(4)};

    `,

    'INC_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rBefore', 1))};
        var rAfter = ${h.readR8(parameters[0])};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '<', 'rBefore')};

        ${h.applyClockCycles(4)};

    `,

    'INC_r16' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR16(parameters[0], h.add16(h.readR16(parameters[0]), 1))};

        ${h.applyClockCycles(8)};

    `,

    'INC_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[0])};

        var mBefore = ${h.readMem8('target')};
        ${h.writeMem8('target', h.add8('mBefore', 1))};
        var mAfter = ${h.readMem8('target')};

        ${h.bcd(false)};
        ${h.zero('mAfter')};
        ${h.half('mAfter', '<', 'mBefore')};

        ${h.applyClockCycles(12)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'DEC_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.sub8('rBefore', 1))};
        var rAfter = ${h.readR8(parameters[0])};

        ${h.bcd(true)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '>', 'rBefore')};

        ${h.applyClockCycles(4)};

    `,

    'DEC_r16' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR16(parameters[0], h.sub16(h.readR16(parameters[0]), 1))};

        ${h.applyClockCycles(8)};

    `,

    'DEC_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[0])};

        var mBefore = ${h.readMem8('target')};
        ${h.writeMem8('target', h.sub8('mBefore', 1))};
        var mAfter = ${h.readMem8('target')};

        ${h.bcd(true)};
        ${h.zero('mAfter')};
        ${h.half('mAfter', '>', 'mBefore')};

        ${h.applyClockCycles(12)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'JR_NZ_i8' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 0) {

            ${h.applyClockCycles(12)};
            ${h.jumpTo(h.add16(nextAddress, parameters[0]))};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'JR_Z_i8' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 1) {

            ${h.applyClockCycles(12)};
            ${h.jumpTo(h.add16(nextAddress, parameters[0]))};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'JR_NC_i8' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 0) {

            ${h.applyClockCycles(12)};
            ${h.jumpTo(h.add16(nextAddress, parameters[0]))};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'JR_C_i8' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 1) {

            ${h.applyClockCycles(12)};
            ${h.jumpTo(h.add16(nextAddress, parameters[0]))};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'JR_i8' : ( address, nextAddress, parameters, h ) => `

        ${h.applyClockCycles(12)};
        ${h.jumpTo(h.add16(nextAddress, parameters[0]))};

    `,

    'JP_NZ_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 0) {

            ${h.applyClockCycles(16)};
            ${h.jumpTo(parameters[0])};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'JP_Z_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 1) {

            ${h.applyClockCycles(16)};
            ${h.jumpTo(parameters[0])};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'JP_NC_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 0) {

            ${h.applyClockCycles(16)};
            ${h.jumpTo(parameters[0])};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'JP_C_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 1) {

            ${h.applyClockCycles(16)};
            ${h.jumpTo(parameters[0])};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'JP_u16' : ( address, nextAddress, parameters, h ) => `

        ${h.applyClockCycles(16)};
        ${h.jumpTo(parameters[0])};

    `,

    'JP_r16' : ( address, nextAddress, parameters, h ) => `

        ${h.applyClockCycles(4)};
        ${h.jumpTo(h.readR16(parameters[0]))};

    `,

    'CALL_NZ_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 0) {

            ${h.pushStack(nextAddress)};
            ${h.jumpTo(parameters[0])};

            ${h.applyClockCycles(24)};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'CALL_Z_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 1) {

            ${h.pushStack(nextAddress)};
            ${h.jumpTo(parameters[0])};

            ${h.applyClockCycles(24)};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'CALL_NC_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 0) {

            ${h.pushStack(nextAddress)};
            ${h.jumpTo(parameters[0])};

            ${h.applyClockCycles(24)};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'CALL_C_u16' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 1) {

            ${h.pushStack(nextAddress)};
            ${h.jumpTo(parameters[0])};

            ${h.applyClockCycles(24)};

        } else {

            ${h.applyClockCycles(12)};

        }

    `,

    'CALL_u16' : ( address, nextAddress, parameters, h ) => `

        ${h.pushStack(nextAddress)};
        ${h.jumpTo(parameters[0])};

        ${h.applyClockCycles(24)};

    `,

    'RET_NZ' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 0) {

            var retTarget;

            ${h.popStack('retTarget')};
            ${h.jumpTo('retTarget')};

            ${h.applyClockCycles(20)};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'RET_Z' : ( address, nextAddress, parameters, h ) => `

        if (${h.zero()} === 1) {

            var retTarget;

            ${h.popStack('retTarget')};
            ${h.jumpTo('retTarget')};

            ${h.applyClockCycles(20)};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'RET_NC' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 0) {

            var retTarget;

            ${h.popStack('retTarget')};
            ${h.jumpTo('retTarget')};

            ${h.applyClockCycles(20)};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'RET_C' : ( address, nextAddress, parameters, h ) => `

        if (${h.carry()} === 1) {

            var retTarget;

            ${h.popStack('retTarget')};
            ${h.jumpTo('retTarget')};

            ${h.applyClockCycles(20)};

        } else {

            ${h.applyClockCycles(8)};

        }

    `,

    'RET' : ( address, nextAddress, parameters, h ) => `

        var retTarget;

        ${h.popStack('retTarget')};
        ${h.jumpTo('retTarget')};

        ${h.applyClockCycles(16)};

    `,

    'RETI' : ( address, nextAddress, parameters, h ) => `

        environment.cpuInterruptFeature = true;

        var retTarget;

        ${h.popStack('retTarget')};
        ${h.jumpTo('retTarget')};

        ${h.applyClockCycles(16)};

    `,

    'RST_u8' : ( address, nextAddress, parameters, h ) => `

        ${h.pushStack(nextAddress)};
        ${h.jumpTo(parameters[0])};

        ${h.applyClockCycles(16)};

    `,

    'ADC_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rBefore', h.readR8(parameters[1])))};
        var rAfter = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rAfter', h.carry()))};
        var rAfterCarry = ${h.readR8(parameters[0])};

        ${h.bcd(false)};
        ${h.zero('rAfterCarry')};

        ${h.half('rAfter', '<', 'rBefore')};
        ${h.carry('rAfter', '<', 'rBefore')};

        if (${h.half()} === 0)
            ${h.half('rAfterCarry', '<', 'rAfter')};

        if (${h.carry()} === 0)
            ${h.carry('rAfterCarry', '<', 'rAfter')};

        ${h.applyClockCycles(4)};

    `,

    'ADC_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rBefore', parameters[1]))};
        var rAfter = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rAfter', h.carry()))};
        var rAfterCarry = ${h.readR8(parameters[0])};

        ${h.bcd(false)};
        ${h.zero('rAfterCarry')};

        ${h.half('rAfter', '<', 'rBefore')};
        ${h.carry('rAfter', '<', 'rBefore')};

        if (${h.half()} === 0)
            ${h.half('rAfterCarry', '<', 'rAfter')};

        if (${h.carry()} === 0)
            ${h.carry('rAfterCarry', '<', 'rAfter')};

        ${h.applyClockCycles(8)};

    `,

    'ADC_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rBefore', h.readMem8(h.readR16(parameters[1]))))};
        var rAfter = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rAfter', h.carry()))};
        var rAfterCarry = ${h.readR8(parameters[0])};

        ${h.bcd(false)};
        ${h.zero('rAfterCarry')};

        ${h.half('rAfter', '<', 'rBefore')};
        ${h.carry('rAfter', '<', 'rBefore')};

        if (${h.half()} === 0)
            ${h.half('rAfterCarry', '<', 'rAfter')};

        if (${h.carry()} === 0)
            ${h.carry('rAfterCarry', '<', 'rAfter')};

        ${h.applyClockCycles(8)};

    `,

    'ADD_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rBefore', h.readR8(parameters[1])))};
        var rAfter = ${h.readR8(parameters[0])};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '<', 'rBefore')};
        ${h.carry('rAfter', '<', 'rBefore')};

        ${h.applyClockCycles(4)};

    `,

    'ADD_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rBefore', parameters[1]))};
        var rAfter = ${h.readR8(parameters[0])};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '<', 'rBefore')};
        ${h.carry('rAfter', '<', 'rBefore')};

        ${h.applyClockCycles(8)};

    `,

    'ADD_r16_r16' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR16(parameters[0])};
        ${h.writeR16(parameters[0], h.add16('rBefore', h.readR16(parameters[1])))};
        var rAfter = ${h.readR16(parameters[0])};

        ${h.bcd(false)};
        ${h.half('rAfter', '<', 'rBefore', 0x0FFF)};
        ${h.carry('rAfter', '<', 'rBefore', 0xFFFF)};

        ${h.applyClockCycles(8)};

    `,

    'ADD_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.add8('rBefore', h.readMem8(h.readR16(parameters[1]))))};
        var rAfter = ${h.readR8(parameters[0])};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '<', 'rBefore')};
        ${h.carry('rAfter', '<', 'rBefore')};

        ${h.applyClockCycles(8)};

    `,

    'ADD_r16_i8' : ( address, nextAddress, parameters, h ) => `

        var rrBefore = ${h.readR16(parameters[0])};
        ${h.writeR16(parameters[0], h.add16(parameters[0], parameters[1]))};
        var rrAfter = ${h.readR16(parameters[0])};

        ${h.bcd(false)};
        ${h.zero(false)};
        ${h.half('rrAfter', '<', 'rrBefore')};
        ${h.half('rrAfter', '<', 'rrBefore')};

        ${h.applyClockCycles(16)};

    `,

    'SBC_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.sub8('rBefore', h.readR8(parameters[1])))};
        var rAfter = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.sub8('rAfter', h.carry()))};
        var rAfterCarry = ${h.readR8(parameters[0])};

        ${h.bcd(true)};
        ${h.zero('rAfterCarry')};

        ${h.half('rAfter', '>', 'rBefore')};
        ${h.carry('rAfter', '>', 'rBefore')};

        if (${h.half()} === 0)
            ${h.half('rAfterCarry', '>', 'rAfter')};

        if (${h.carry()} === 0)
            ${h.carry('rAfterCarry', '>', 'rAfter')};

        ${h.applyClockCycles(4)};

    `,

    'SBC_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.sub8('rBefore', parameters[1]))};
        var rAfter = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.sub8('rAfter', h.carry()))};
        var rAfterCarry = ${h.readR8(parameters[0])};

        ${h.bcd(true)};
        ${h.zero('rAfterCarry')};

        ${h.half('rAfter', '>', 'rBefore')};
        ${h.carry('rAfter', '>', 'rBefore')};

        if (${h.half()} === 0)
            ${h.half('rAfterCarry', '>', 'rAfter')};

        if (${h.carry()} === 0)
            ${h.carry('rAfterCarry', '>', 'rAfter')};

        ${h.applyClockCycles(8)};

    `,

    'SBC_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.sub8('rBefore', h.readMem8(h.readR16(parameters[1]))))};
        var rAfter = ${h.readR8(parameters[0])};
        ${h.writeR8(parameters[0], h.sub8('rAfter', h.carry()))};
        var rAfterCarry = ${h.readR8(parameters[0])};

        ${h.bcd(true)};
        ${h.zero('rAfterCarry')};

        ${h.half('rAfter', '>', 'rBefore')};
        ${h.carry('rAfter', '>', 'rBefore')};

        if (${h.half()} === 0)
            ${h.half('rAfterCarry', '>', 'rAfter')};

        if (${h.carry()} === 0)
            ${h.carry('rAfterCarry', '>', 'rAfter')};

        ${h.applyClockCycles(8)};

    `,

    'CP_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var tmp = ${h.readR8(parameters[0])};
        var cmp = ${h.sub8('tmp', h.readR8(parameters[1]))};

        ${h.bcd(true)};
        ${h.zero('cmp')};
        ${h.half('cmp', '>', 'tmp')};
        ${h.carry('cmp', '>', 'tmp')};

        ${h.applyClockCycles(4)};

    `,

    'CP_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var tmp = ${h.readR8(parameters[0])};
        var cmp = ${h.sub8('tmp', parameters[1])};

        ${h.bcd(true)};
        ${h.zero('cmp')};
        ${h.half('cmp', '>', 'tmp')};
        ${h.carry('cmp', '>', 'tmp')};

        ${h.applyClockCycles(8)};

    `,

    'CP_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var tmp = ${h.readR8(parameters[0])};
        var cmp = ${h.sub8('tmp', h.readMem8(h.readR16(parameters[1])))};

        ${h.bcd(true)};
        ${h.zero('cmp')};
        ${h.half('cmp', '>', 'tmp')};
        ${h.carry('cmp', '>', 'tmp')};

        ${h.applyClockCycles(8)};

    `,

    'SUB_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        var rAfter = ${h.sub8('rBefore', h.readR8(parameters[1]))};
        ${h.writeR8(parameters[0], 'rAfter')};

        ${h.bcd(true)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '>', 'rBefore')};
        ${h.carry('rAfter', '>', 'rBefore')};

        ${h.applyClockCycles(4)};

    `,

    'SUB_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        var rAfter = ${h.sub8('rBefore', parameters[1])};
        ${h.writeR8(parameters[0], 'rAfter')};

        ${h.bcd(true)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '>', 'rBefore')};
        ${h.carry('rAfter', '>', 'rBefore')};

        ${h.applyClockCycles(8)};

    `,

    'SUB_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[0])};
        var rAfter = ${h.sub8('rBefore', h.readMem8(h.readR16(parameters[1])))};
        ${h.writeR8(parameters[0], 'rAfter')};

        ${h.bcd(true)};
        ${h.zero('rAfter')};
        ${h.half('rAfter', '>', 'rBefore')};
        ${h.carry('rAfter', '>', 'rBefore')};

        ${h.applyClockCycles(8)};

    `,

    'AND_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '&' + h.readR8(parameters[1])};
        ${h.writeR8(parameters[0], 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(true)};
        ${h.carry(false)};

        ${h.applyClockCycles(4)};

    `,

    'AND_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '&' + parameters[1]};
        ${h.writeR8(parameters[0], 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(true)};
        ${h.carry(false)};

        ${h.applyClockCycles(8)};

    `,

    'AND_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '&' + h.readMem8(h.readR16(parameters[1]))};
        ${h.writeR8(parameters[0], 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(true)};
        ${h.carry(false)};

        ${h.applyClockCycles(8)};

    `,

    'OR_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '|' + h.readR8(parameters[1])};
        ${h.writeR8(parameters[0], 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(4)};

    `,

    'OR_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '|' + parameters[1]};
        ${h.writeR8(parameters[0], 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(8)};

    `,

    'OR_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '|' + h.readMem8(h.readR16(parameters[1]))};
        ${h.writeR8(parameters[0], 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(8)};

    `,

    'XOR_r8_r8' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '^' + h.readR8(parameters[1])};
        ${h.writeR8('a', 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(4)};

    `,

    'XOR_r8_u8' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '^' + parameters[1]};
        ${h.writeR8('a', 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(8)};

    `,

    'XOR_r8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var value = ${h.readR8(parameters[0]) + '^' + h.readMem8(h.readR16(parameters[1]))};
        ${h.writeR8('a', 'value')};

        ${h.bcd(false)};
        ${h.zero('value')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(8)};

    `,

    'CPL_r8' : ( address, nextAddress, parameters, h ) => `

        ${h.writeR8(parameters[0], '~' + h.readR8(parameters[0]))};

        ${h.bcd(true)};
        ${h.half(true)};

    `,

    'RR_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};
        var rightMostBit = rBefore & 0x01;

        var rAfter = (rBefore >>> 1) | (${h.carry()} << 7);
        ${h.writeR8(parameters[1], 'rAfter')}

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(8)};

    `,

    'RR_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var mBefore = ${h.readMem8('target')};
        var rightMostBit = mBefore & 0x01;

        var mAfter = (mBefore >>> 1) | (${h.carry()} << 7);
        ${h.writeMem8('target', 'mAfter')};

        ${h.bcd(false)};
        ${h.zero('mAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'RRC_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};
        var rightMostBit = rBefore & 0x01;

        var rAfter = (rBefore >>> 1) | (rightMostBit << 7);
        ${h.writeR8(parameters[1], 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(8)};

    `,

    'RRC_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var mBefore = ${h.readMem8('target')};
        var rightMostBit = mBefore & 0x01;

        var mAfter = (mBefore >>> 1) | (rightMostBit << 7);
        ${h.writeMem8('target', 'mAfter')};

        ${h.bcd(false)};
        ${h.zero('mAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'RRA' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8('a')};
        var rightMostBit = rBefore & 0x01;

        var rAfter = (rBefore >>> 1) | (${h.carry()} << 7);
        ${h.writeR8('a', 'rAfter')};

        ${h.bcd(false)};
        ${h.zero(false)};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(4)};

    `,

    'RRCA' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8('a')};
        var rightMostBit = rBefore & 0x01;

        var rAfter = (rBefore >>> 1) | (rightMostBit << 7);
        ${h.writeR8('a', 'rAfter')};

        ${h.bcd(false)};
        ${h.zero(false)};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(4)};

    `,

    'RL_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};
        var leftMostBit = rBefore >>> 7;

        var rAfter = ((rBefore << 1) | ${h.carry()}) & 0xFF;
        ${h.writeR8(parameters[1], 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(8)};

    `,

    'RL_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var mBefore = ${h.readMem8('target')};
        var leftMostBit = mBefore >>> 7;

        var mAfter = ((mBefore << 1) | ${h.carry()}) & 0xFF;
        ${h.writeMem8('target', 'mAfter')};

        ${h.bcd(false)};
        ${h.zero('mAfter')};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'RLC_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};
        var leftMostBit = rBefore >>> 7;

        var rAfter = ((rBefore << 1) | leftMostBit) & 0xFF;
        ${h.writeR8(parameters[1], 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(8)};

    `,

    'RLC_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var mBefore = ${h.readMem8('target')};
        var leftMostBit = mBefore >>> 7;

        var mAfter = ((mBefore << 1) | leftMostBit) & 0xFF;
        ${h.writeMem8('target', 'mAfter')};

        ${h.bcd(false)};
        ${h.zero('mAfter')};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'RLA' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8('a')};
        var leftMostBit = rBefore >>> 7;

        var rAfter = ((rBefore << 1) | ${h.carry()}) & 0xFF;
        ${h.writeR8('a', 'rAfter')};

        ${h.bcd(false)};
        ${h.zero(false)};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(4)};

    `,

    'RLCA' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8('a')};
        var leftMostBit = rBefore >>> 7;

        var rAfter = ((rBefore << 1) | leftMostBit) & 0xFF;
        ${h.writeR8('a', 'rAfter')};

        ${h.bcd(false)};
        ${h.zero(false)};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(4)};

    `,

    'SLA_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};
        var leftMostBit = rBefore >>> 7;

        var rAfter = (rBefore << 1) & 0xFF;
        ${h.writeR8(parameters[1], 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(8)};

    `,

    'SLA_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var rBefore = ${h.readMem8('target')};
        var leftMostBit = rBefore >>> 7;

        var rAfter = (rBefore << 1) & 0xFF;
        ${h.writeMem8('target', 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (leftMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'SRA_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};
        var leftMostBit = rBefore >>> 7;
        var rightMostBit = rBefore & 0x01;

        var rAfter = (rBefore >>> 1) | (leftMostBit << 7);
        ${h.writeR8(parameters[1], 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(8)};

    `,

    'SRA_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var rBefore = ${h.readMem8('target')};
        var leftMostBit = rBefore >>> 7;
        var rightMostBit = rBefore & 0x01;

        var rAfter = (rBefore >>> 1) | (leftMostBit << 7);
        ${h.writeMem8('target', 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'SRL_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};
        var rightMostBit = rBefore & 0x01;

        var rAfter = rBefore >>> 1;
        ${h.writeR8(parameters[1], 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(8)};

    `,

    'SRL_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var rBefore = ${h.readMem8('target')};
        var rightMostBit = rBefore & 0x01;

        var rAfter = rBefore >> 1;
        ${h.writeMem8('target', 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};

        if (rightMostBit === 1) {
            ${h.carry(true)};
        } else {
            ${h.carry(false)};
        }

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'BIT_u8_r8' : ( address, nextAddress, parameters, h ) => `

        var bit = ${h.readR8(parameters[2])} & (1 << ${parameters[1]});

        ${h.bcd(false)};
        ${h.zero('bit')};
        ${h.half(true)};

        ${h.applyClockCycles(8)};

    `,

    'BIT_u8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var bit = ${h.readMem8(h.readR16(parameters[2]))} & (1 << ${parameters[1]});

        ${h.bcd(false)};
        ${h.zero('bit')};
        ${h.half(true)};

        ${h.applyClockCycles(12)};

    `,

    'RES_u8_r8' : ( address, nextAddress, parameters, h ) => `

        var rAfter = ${h.readR8(parameters[2])} & ~(1 << ${parameters[1]});
        ${h.writeR8(parameters[2], 'rAfter')};

        ${h.applyClockCycles(12)};

    `,

    'RES_u8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[2])};

        var rAfter = ${h.readMem8('target')} & ~(1 << ${parameters[1]});
        ${h.writeMem8('target', 'rAfter')};

        ${h.applyClockCycles(16)};

    `,

    'SET_u8_r8' : ( address, nextAddress, parameters, h ) => `

        var rAfter = ${h.readR8(parameters[2])} | (1 << ${parameters[1]});
        ${h.writeR8(parameters[2], 'rAfter')};

        ${h.applyClockCycles(12)};

    `,

    'SET_u8_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[2])};

        var rAfter = ${h.readMem8('target')} | (1 << ${parameters[1]});
        ${h.writeMem8('target', 'rAfter')};

        ${h.applyClockCycles(16)};

    `,

    'SWAP_r8' : ( address, nextAddress, parameters, h ) => `

        var rBefore = ${h.readR8(parameters[1])};

        var rAfter = ((rBefore << 4) | (rBefore >>> 4)) & 0xFF;
        ${h.writeR8(parameters[1], 'rAfter')};

        ${h.bcd(false)};
        ${h.zero('rAfter')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(8)};

    `,

    'SWAP_(r16)' : ( address, nextAddress, parameters, h ) => `

        var target = ${h.readR16(parameters[1])};

        var mBefore = ${h.readMem8('target')};

        var mAfter = ((mBefore << 4) | (mBefore >>> 4)) & 0xFF;
        ${h.writeMem8('target', 'mAfter')};

        ${h.bcd(false)};
        ${h.zero('mAfter')};
        ${h.half(false)};
        ${h.carry(false)};

        ${h.applyClockCycles(16)};

        ${h.checkForInvalidation(nextAddress)};

    `,

    'STOP_u8' : ( address, nextAddress, parameters, h ) => `

        ${h.applyClockCycles(4)};

        ${h.jumpTo(nextAddress)};

    `,

    'HALT' : ( address, nextAddress, parameters, h ) => `

        ${h.applyClockCycles(4)};

        ${h.jumpTo(nextAddress)};

    `

};
