# Neon EVM Token transfer SDK Changelog
All notable changes to this project will be documented in this file.

## [4.4.1] (2024-12-05)
### Added
* Refactor: Updated examples and README.md

## [4.4.0] (2024-11-06)
### Added
* Refactor: Updated method signatures to accept parameter objects

## [4.2.0] (2024-08-27)
### Added
* Add: Holder account creation
* Refactor: TransactionExecuteFromInstruction

## [4.1.1] (2024-08-09)
### Added
* Add: solanaOverrides in simulation request
* Update: e2e tests - add custom SPL token creation and ERC-20 wrapper deployment
* Refactor: proxy response deserialization

### Refactor
* Update: 'neon_getEvmParams' response model
* Update: 'neon_getNativeTokenList' response model
* Update: 'neon_emulate' response model
* Update: 'balanceAccount' for the 'TransactionExecuteFromInstruction'

## [4.0.0] (2024-02-06)
### Added
* Ether.js library support
* Web3.js library support
* refactor: split package into separate modules
