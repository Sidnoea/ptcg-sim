//number: every card UP until that number is of that type, i.e., it's the first card that's type is different

const SVEra = {
    "SSP": {
        162: "Pokémon",
        191: "Trainer",
        192: "Energy",
        229: "Pokémon",
        236: "Trainer",
        243: "Pokémon",
        247: "Trainer",
        249: "Pokémon",
        252: "Trainer",
        253: "Energy",
    },
    "SCR": {
        129: "Pokémon",
        143: "Trainer",
        163: "Pokémon",
        167: "Trainer",
        171: "Pokémon",
        173: "Trainer",
        174: "Pokémon",
        176: "Trainer",
    },
    "SFA": {
        54: "Pokémon",
        65: "Trainer",
        86: "Pokémon",
        90: "Trainer",
        94: "Pokémon",
        98: "Trainer",
        100: "Energy",
    },
    "TWM": {
        142: "Pokémon",
        166: "Trainer",
        168: "Energy",
        203: "Pokémon",
        210: "Trainer",
        217: "Pokémon",
        221: "Trainer",
        223: "Pokémon",
        226: "Trainer",
        227: "Energy",
    },
    "TEF": {
        140: "Pokémon",
        161: "Trainer",
        163: "Energy",
        197: "Pokémon",
        203: "Trainer",
        209: "Pokémon",
        213: "Trainer",
        218: "Pokémon",
    },
    "PAF": {
        76: "Pokémon",
        92: "Trainer",
        227: "Pokémon",
        232: "Trainer",
        235: "Pokémon",
        240: "Trainer",
        246: "Pokémon",
    },
    "PAR": {
        159: "Pokémon",
        182: "Trainer",
        183: "Energy",
        235: "Pokémon",
        245: "Trainer",
        254: "Pokémon",
        260: "Trainer",
        263: "Pokémon",
        266: "Trainer",
        267: "Energy",
    },
    "MEW": {
        152: "Pokémon",
        166: "Trainer",
        194: "Pokémon",
        198: "Trainer",
        203: "Pokémon",
        205: "Trainer",
        206: "Pokémon",
        207: "Trainer",
        208: "Energy",
    },
    "OBF": {
        186: "Pokémon",
        198: "Trainer",
        218: "Pokémon",
        222: "Trainer",
        226: "Pokémon",
        228: "Trainer",
        229: "Pokémon",
        230: "Trainer",
        231: "Energy",
    },
    "PAL": {
        171: "Pokémon",
        190: "Trainer",
        194: "Energy",
        248: "Pokémon",
        256: "Trainer",
        265: "Pokémon",
        271: "Trainer",
        276: "Pokémon",
        278: "Trainer",
        280: "Energy",
    },
    "SVI": {
        166: "Pokémon",
        199: "Trainer",
        235: "Pokémon",
        243: "Trainer",
        249: "Pokémon",
        253: "Trainer",
        255: "Pokémon",
        257: "Trainer",
        259: "Energy",
    },
    "SVP": {
        45: "Pokémon",
        46: "Trainer",
        114: "Pokémon",
        115: "Trainer",
        124: "Pokémon",
        125: "Trainer",
        150: "Pokémon",
        151: "Trainer",
        166: "Pokémon",
    },
    "SVE": {
        17: "Energy",
    },
};

const SSEra = {
    "CRZ": {
        123: "Pokémon",
        152: "Trainer",
        160: "Energy",
        161: "Pokémon",
    },
    "CRZGG": {
        57: "Pokémon",
        67: "Trainer",
        71: "Pokémon",
    },
    "SIT": {
        151: "Pokémon",
        168: "Trainer",
        170: "Energy",
        188: "Pokémon",
        196: "Trainer",
        203: "Pokémon",
        210: "Trainer",
        212: "Pokémon",
        215: "Trainer",
        216: "Energy",
    },
    "SITTG": {
        23: "Pokémon",
        29: "Trainer",
        31: "Pokémon",
    },
    "LOR": {
        152: "Pokémon",
        171: "Trainer",
        172: "Energy",
        189: "Pokémon",
        197: "Trainer",
        204: "Pokémon",
        212: "Trainer",
        214: "Pokémon",
        218: "Trainer",
    },
    "LORTG": {
        23: "Pokémon",
        29: "Trainer",
        31: "Pokémon",
    },
    "PGO": {
        64: "Pokémon",
        71: "Trainer",
        78: "Pokémon",
        79: "Trainer",
        82: "Pokémon",
        86: "Trainer",
        87: "Pokémon",
        89: "Trainer",
    },
    "ASR": {
        135: "Pokémon",
        160: "Trainer",
        181: "Pokémon",
        190: "Trainer",
        199: "Pokémon",
        208: "Trainer",
        211: "Pokémon",
        216: "Trainer",
        217: "Energy",
    },
    "ASRTG": {
        1: "Energy",
        24: "Pokémon",
        29: "Trainer",
        31: "Pokémon",
    },
    "BRS": {
        129: "Pokémon",
        151: "Trainer",
        152: "Energy",
        167: "Pokémon",
        173: "Trainer",
        177: "Pokémon",
        181: "Trainer",
        185: "Pokémon",
        187: "Trainer",
    },
    "BRSTG": {
        1: "Energy",
        24: "Pokémon",
        29: "Trainer",
        31: "Pokémon",
    },
    "FST": {
        224: "Pokémon",
        244: "Trainer",
        245: "Energy",
        258: "Pokémon",
        265: "Trainer",
        273: "Pokémon",
        280: "Trainer",
        281: "Pokémon",
        283: "Trainer",
        285: "Energy",
    },
    "CEL": {
        23: "Pokémon",
        25: "Trainer",
        26: "Pokémon",
    },
    "CELCC": {
        4: "Pokémon",
        5: "Trainer",
        6: "Pokémon",
        7: "Trainer",
        12: "Pokémon",
        13: "Trainer",
        26: "Pokémon",
    },
    "EVS": {
        141: "Pokémon",
        166: "Trainer",
        199: "Pokémon",
        204: "Trainer",
        221: "Pokémon",
        226: "Trainer",
        229: "Pokémon",
        235: "Trainer",
        238: "Energy",
    },
    "CRE": {
        129: "Pokémon",
        157: "Trainer",
        160: "Energy",
        186: "Pokémon",
        199: "Trainer",
        210: "Pokémon",
        222: "Trainer",
        225: "Pokémon",
        231: "Trainer",
        233: "Energy",
    },
    "BST": {
        121: "Pokémon",
        140: "Trainer",
        142: "Energy",
        158: "Pokémon",
        164: "Trainer",
        172: "Pokémon",
        178: "Trainer",
        180: "Pokémon",
        182: "Trainer",
        184: "Energy",
    },
    "SHF": {
        57: "Pokémon",
        64: "Trainer",
        65: "Pokémon",
        73: "Trainer",
        74: "Pokémon",
    },
    "SHFSV": {
        123: "Pokémon",
    },
    "VIV": {
        146: "Pokémon",
        162: "Trainer",
        166: "Energy",
        179: "Pokémon",
        186: "Trainer",
        192: "Pokémon",
        198: "Trainer",
        200: "Pokémon",
        204: "Trainer",
    },
    "CPA": {
        50: "Pokémon",
        69: "Trainer",
        73: "Pokémon",
        74: "Trainer",
        77: "Pokémon",
        79: "Trainer",
        80: "Pokémon",
        81: "Trainer",
    },
    "DAA": {
        157: "Pokémon",
        174: "Trainer",
        177: "Energy",
        186: "Pokémon",
        190: "Trainer",
        195: "Pokémon",
        197: "Trainer",
        199: "Pokémon",
        201: "Trainer",
        202: "Energy",
    },
    "RCL": {
        154: "Pokémon",
        171: "Trainer",
        175: "Energy",
        189: "Pokémon",
        193: "Trainer",
        200: "Pokémon",
        204: "Trainer",
        206: "Pokémon",
        209: "Trainer",
        210: "Energy",
    },
    "SSH": {
        156: "Pokémon",
        186: "Trainer",
        187: "Energy",
        199: "Pokémon",
        203: "Trainer",
        207: "Pokémon",
        211: "Trainer",
        213: "Pokémon",
        217: "Trainer",
    },
    "SP": {
        120: "Pokémon",
        122: "Trainer",
        146: "Pokémon",
        147: "Trainer",
        152: "Pokémon",
        153: "Trainer",
        167: "Pokémon",
        168: "Trainer",
        178: "Pokémon",
        179: "Trainer",
        226: "Pokémon",
        229: "Trainer",
        251: "Pokémon",
        252: "Trainer",
        296: "Pokémon",
        297: "Trainer",
        302: "Pokémon",
        306: "Trainer",
        308: "Pokémon",
    },
};

const SMEra = {
    "CEC": {
        185: "Pokémon",
        209: "Trainer",
        210: "Energy",
        228: "Pokémon",
        237: "Trainer",
        263: "Pokémon",
        271: "Trainer",
        272: "Energy",
    },
    "HIF": {
        51: "Pokémon",
        66: "Trainer",
        67: "Pokémon",
        69: "Trainer",
        70: "Pokémon",
    },
    "HIFSV": {
        81: "Pokémon",
        91: "Trainer",
        95: "Pokémon",
    },
    "UNM": {
        186: "Pokémon",
        212: "Trainer",
        214: "Energy",
        231: "Pokémon",
        237: "Trainer",
        250: "Pokémon",
        257: "Trainer",
        259: "Energy",
    },
    "UNB": {
        164: "Pokémon",
        190: "Trainer",
        191: "Energy",
        209: "Pokémon",
        215: "Trainer",
        229: "Pokémon",
        234: "Trainer",
        235: "Energy",
    },
    "DET": {
        19: "Pokémon",
    },
    "TEU": {
        133: "Pokémon",
        159: "Trainer",
        172: "Pokémon",
        182: "Trainer",
        192: "Pokémon",
        197: "Trainer",
    },
    "LOT": {
        167: "Pokémon",
        194: "Trainer",
        195: "Energy",
        208: "Pokémon",
        215: "Trainer",
        228: "Pokémon",
        237: "Trainer",
    },
    "DRM": {
        58: "Pokémon",
        65: "Trainer",
        69: "Pokémon",
        71: "Trainer",
        75: "Pokémon",
        78: "Trainer",
        79: "Pokémon",
    },
    "CES": {
        123: "Pokémon",
        151: "Trainer",
        152: "Energy",
        161: "Pokémon",
        169: "Trainer",
        178: "Pokémon",
        183: "Trainer",
        184: "Energy",
    },
    "FLI": {
        102: "Pokémon",
        117: "Trainer",
        119: "Energy",
        128: "Pokémon",
        132: "Trainer",
        141: "Pokémon",
        146: "Trainer",
        147: "Energy",
    },
    "UPR": {
        118: "Pokémon",
        136: "Trainer",
        139: "Energy",
        148: "Pokémon",
        157: "Trainer",
        166: "Pokémon",
        170: "Trainer",
        172: "Energy",
        174: "Pokémon",
    },
    "CIN": {
        91: "Pokémon",
        100: "Trainer",
        101: "Energy",
        109: "Pokémon",
        112: "Trainer",
        120: "Pokémon",
        122: "Trainer",
        125: "Energy",
    },
    "SLG": {
        58: "Pokémon",
        69: "Trainer",
        71: "Energy",
        73: "Pokémon",
        74: "Trainer",
        79: "Pokémon",
    },
    "BUS": {
        112: "Pokémon",
        129: "Trainer",
        142: "Pokémon",
        148: "Trainer",
        161: "Pokémon",
        167: "Trainer",
        170: "Energy",
    },
    "GRI": {
        116: "Pokémon",
        131: "Trainer",
        143: "Pokémon",
        146: "Trainer",
        161: "Pokémon",
        166: "Trainer",
        170: "Energy",
    },
    "SUM": {
        114: "Pokémon",
        136: "Trainer",
        138: "Energy",
        146: "Pokémon",
        150: "Trainer",
        158: "Pokémon",
        162: "Trainer",
        164: "Energy",
    },
    "SMP": {
        78: "Pokémon",
        79: "Trainer",
        148: "Pokémon",
        149: "Trainer",
        231: "Pokémon",
        232: "Trainer",
        246: "Pokémon",
        247: "Trainer",
        249: "Pokémon",
    },
};

const XYEra = {
    "EVO": {
        73: "Pokémon",
        90: "Trainer",
        100: "Energy",
        107: "Pokémon",
        109: "Trainer",
        113: "Pokémon",
        114: "Trainer",
    },
    "STS": {
        98: "Pokémon",
        107: "Trainer",
        113: "Pokémon",
        115: "Trainer",
        117: "Pokémon",
    },
    "FCO": {
        90: "Pokémon",
        114: "Trainer",
        116: "Energy",
        124: "Pokémon",
        125: "Trainer",
        126: "Pokémon",
    },
    "GEN": {
        59: "Pokémon",
        74: "Trainer",
        84: "Energy",
    },
    "GENRC": {
        1: "Energy",
        26: "Pokémon",
        28: "Trainer",
        33: "Pokémon",
    },
    "BKP": {
        96: "Pokémon",
        113: "Trainer",
        114: "Energy",
        122: "Pokémon",
        123: "Trainer",
        124: "Pokémon",
    },
    "BKT": {
        133: "Pokémon",
        151: "Trainer",
        153: "Energy",
        161: "Pokémon",
        163: "Trainer",
        165: "Pokémon",
    },
    "AOR": {
        69: "Pokémon",
        82: "Trainer",
        84: "Energy",
        95: "Pokémon",
        96: "Trainer",
        99: "Pokémon",
        101: "Trainer",
    },
    "ROS": {
        83: "Pokémon",
        97: "Trainer",
        98: "Energy",
        107: "Pokémon",
        111: "Trainer",
    },
    "DCR": {
        23: "Pokémon",
        33: "Trainer",
        35: "Energy",
    },
    "PRC": {
        122: "Pokémon",
        143: "Trainer",
        145: "Energy",
        157: "Pokémon",
        165: "Trainer",
    },
    "PHF": {
        91: "Pokémon",
        111: "Trainer",
        113: "Energy",
        117: "Pokémon",
        120: "Trainer",
        123: "Pokémon",
    },
    "FFI": {
        88: "Pokémon",
        103: "Trainer",
        105: "Energy",
        109: "Pokémon",
        112: "Trainer",
        114: "Pokémon",
    },
    "FLF": {
        88: "Pokémon",
        100: "Trainer",
        104: "Pokémon",
        107: "Trainer",
        110: "Pokémon",
    },
    "XY": {
        115: "Pokémon",
        130: "Trainer",
        141: "Energy",
        147: "Pokémon",
    },
    "KSS": {
        34: "Pokémon",
        40: "Trainer",
    },
    "XYP": {
        33: "Pokémon",
        34: "Trainer",
        99: "Pokémon",
        100: "Trainer",
        105: "Pokémon",
        106: "Trainer",
        159: "Pokémon",
        160: "Trainer",
        169: "Pokémon",
        170: "Trainer",
        172: "Pokémon",
        173: "Trainer",
        177: "Pokémon",
        179: "Trainer",
        199: "Pokémon",
        200: "Trainer",
        201: "Pokémon",
        202: "Trainer",
        203: "Pokémon",
        212: "Trainer",
    },
};

const BWEra = {
    "LTR": {
        109: "Pokémon",
        113: "Trainer",
        114: "Energy",
    },
    "LTRRC": {
        20: "Pokémon",
        21: "Trainer",
        26: "Pokémon",
    },
    "PLB": {
        78: "Pokémon",
        91: "Trainer",
        92: "Energy",
        96: "Trainer",
        101: "Pokémon",
        102: "Trainer",
        105: "Pokémon",
        106: "Trainer",
    },
    "PLF": {
        99: "Pokémon",
        106: "Trainer",
        107: "Energy",
        109: "Trainer",
        115: "Pokémon",
        117: "Trainer",
        121: "Pokémon",
        123: "Trainer",
    },
    "PLS": {
        117: "Pokémon",
        127: "Trainer",
        128: "Energy",
        131: "Trainer",
        135: "Pokémon",
        136: "Trainer",
        138: "Pokémon",
        139: "Trainer",
    },
    "BCR": {
        127: "Pokémon",
        141: "Trainer",
        147: "Pokémon",
        150: "Trainer",
        153: "Pokémon",
        154: "Trainer",
    },
    "DRV": {
        18: "Pokémon",
        21: "Trainer",
        22: "Pokémon",
    },
    "DRX": {
        113: "Pokémon",
        117: "Trainer",
        119: "Energy",
        129: "Pokémon",
    },
    "DEX": {
        91: "Pokémon",
        103: "Trainer",
        111: "Pokémon",
        112: "Trainer",
    },
    "NXD": {
        86: "Pokémon",
        92: "Trainer",
        94: "Energy",
        104: "Pokémon",
    },
    "NVI": {
        90: "Pokémon",
        97: "Trainer",
        101: "Pokémon",
        102: "Trainer",
        103: "Pokémon",
    },
    "EPO": {
        90: "Pokémon",
        97: "Trainer",
        99: "Pokémon",
    },
    "BLW": {
        92: "Pokémon",
        105: "Trainer",
        113: "Energy",
        116: "Pokémon",
    },
    "BWP": {
        28: "Pokémon",
        32: "Trainer",
        39: "Pokémon",
        40: "Trainer",
        50: "Pokémon",
        51: "Trainer",
        95: "Pokémon",
        96: "Trainer",
        100: "Pokémon",
        101: "Trainer",
        102: "Pokémon",
    },
};

const HSEra = {
    "CL": {
        76: "Pokémon",
        86: "Trainer",
        96: "Energy",
    },
    "CLSL": {
        12: "Pokémon",
    },
    "TM": {
        85: "Pokémon",
        90: "Trainer",
        91: "Energy",
        103: "Pokémon",
    },
    "UD": {
        71: "Pokémon",
        79: "Trainer",
        81: "Energy",
        91: "Pokémon",
    },
    "UL": {
        71: "Pokémon",
        84: "Trainer",
        96: "Pokémon",
    },
    "HS": {
        89: "Pokémon",
        103: "Trainer",
        105: "Energy",
        115: "Pokémon",
        123: "Energy",
        124: "Pokémon",
    },
    "HSP": {
        18: "Pokémon",
        19: "Trainer",
        26: "Pokémon",
    },
};

const setList = {
    ...SVEra,
    ...SSEra,
    ...SMEra,
    ...XYEra,
    ...BWEra,
    ...HSEra,
};

export const getCardType = (setName, cardNumber) => {
    // Function to check for letters at the beginning and separate them
    const separateLettersAndNumbers = (str) => {
        const match = str.match(/^([a-zA-Z]+)(\d+)$/);
        return match ? { letters: match[1], numbers: match[2] } : null;
    };

    // Separate letters from numbers at the beginning of cardNumber
    const separated = separateLettersAndNumbers(cardNumber);

    if (separated) {
        const { letters, numbers } = separated;
        // Update setName and cardNumber accordingly
        setName += letters;
        cardNumber = numbers;
    };

    // Check if the setName is in the dictionary
    if (setList.hasOwnProperty(setName)) {
        // No letters at the beginning, check the regular ranges
        const set = setList[setName];
        const types = Object.values(set);

        for (let i = 0; i < types.length; i++) {
            if (parseInt(cardNumber) < Object.keys(set)[i]) {
                return types[i];
            };
        };
    };

    // Default case if the setName is not found or the cardNumber is too high
    return "Unknown";
};
