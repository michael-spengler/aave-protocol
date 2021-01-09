export const priceFeedAbi = [
    {
      "inputs": [
        {
          "internalType": "contract OpenOraclePriceData",
          "name": "priceData_",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "reporter_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "anchorToleranceMantissa_",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "anchorPeriod_",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "cToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "underlying",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "symbolHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "baseUnit",
              "type": "uint256"
            },
            {
              "internalType": "enum UniswapConfig.PriceSource",
              "name": "priceSource",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fixedPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uniswapMarket",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isUniswapReversed",
              "type": "bool"
            }
          ],
          "internalType": "struct UniswapConfig.TokenConfig[]",
          "name": "configs",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "anchorPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        }
      ],
      "name": "AnchorPriceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reporter",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "anchor",
          "type": "uint256"
        }
      ],
      "name": "PriceGuarded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "PriceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "reporter",
          "type": "address"
        }
      ],
      "name": "ReporterInvalidated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "symbolHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newPrice",
          "type": "uint256"
        }
      ],
      "name": "UniswapWindowUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "anchorPeriod",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ethBaseUnit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "expScale",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "getTokenConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "cToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "underlying",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "symbolHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "baseUnit",
              "type": "uint256"
            },
            {
              "internalType": "enum UniswapConfig.PriceSource",
              "name": "priceSource",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fixedPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uniswapMarket",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isUniswapReversed",
              "type": "bool"
            }
          ],
          "internalType": "struct UniswapConfig.TokenConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "getTokenConfigByCToken",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "cToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "underlying",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "symbolHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "baseUnit",
              "type": "uint256"
            },
            {
              "internalType": "enum UniswapConfig.PriceSource",
              "name": "priceSource",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fixedPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uniswapMarket",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isUniswapReversed",
              "type": "bool"
            }
          ],
          "internalType": "struct UniswapConfig.TokenConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenConfigBySymbol",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "cToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "underlying",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "symbolHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "baseUnit",
              "type": "uint256"
            },
            {
              "internalType": "enum UniswapConfig.PriceSource",
              "name": "priceSource",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fixedPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uniswapMarket",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isUniswapReversed",
              "type": "bool"
            }
          ],
          "internalType": "struct UniswapConfig.TokenConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "symbolHash",
          "type": "bytes32"
        }
      ],
      "name": "getTokenConfigBySymbolHash",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "cToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "underlying",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "symbolHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "baseUnit",
              "type": "uint256"
            },
            {
              "internalType": "enum UniswapConfig.PriceSource",
              "name": "priceSource",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fixedPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uniswapMarket",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isUniswapReversed",
              "type": "bool"
            }
          ],
          "internalType": "struct UniswapConfig.TokenConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "underlying",
          "type": "address"
        }
      ],
      "name": "getTokenConfigByUnderlying",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "cToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "underlying",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "symbolHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "baseUnit",
              "type": "uint256"
            },
            {
              "internalType": "enum UniswapConfig.PriceSource",
              "name": "priceSource",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "fixedPrice",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "uniswapMarket",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isUniswapReversed",
              "type": "bool"
            }
          ],
          "internalType": "struct UniswapConfig.TokenConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "getUnderlyingPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "invalidateReporter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lowerBoundAnchorRatio",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "newObservations",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "acc",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "oldObservations",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "acc",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes[]",
          "name": "messages",
          "type": "bytes[]"
        },
        {
          "internalType": "bytes[]",
          "name": "signatures",
          "type": "bytes[]"
        },
        {
          "internalType": "string[]",
          "name": "symbols",
          "type": "string[]"
        }
      ],
      "name": "postPrices",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "price",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "priceData",
      "outputs": [
        {
          "internalType": "contract OpenOraclePriceData",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "prices",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "reporter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "reporterInvalidated",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "source",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "upperBoundAnchorRatio",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]