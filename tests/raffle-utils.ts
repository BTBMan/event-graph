import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CoordinatorSet,
  OwnershipTransferRequested,
  OwnershipTransferred,
  RaffleEnter,
  RequestedRaffleWinner,
  WinnerPicked
} from "../generated/Raffle/Raffle"

export function createCoordinatorSetEvent(
  vrfCoordinator: Address
): CoordinatorSet {
  let coordinatorSetEvent = changetype<CoordinatorSet>(newMockEvent())

  coordinatorSetEvent.parameters = new Array()

  coordinatorSetEvent.parameters.push(
    new ethereum.EventParam(
      "vrfCoordinator",
      ethereum.Value.fromAddress(vrfCoordinator)
    )
  )

  return coordinatorSetEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent =
    changetype<OwnershipTransferRequested>(newMockEvent())

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createRaffleEnterEvent(player: Address): RaffleEnter {
  let raffleEnterEvent = changetype<RaffleEnter>(newMockEvent())

  raffleEnterEvent.parameters = new Array()

  raffleEnterEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )

  return raffleEnterEvent
}

export function createRequestedRaffleWinnerEvent(
  requestId: BigInt
): RequestedRaffleWinner {
  let requestedRaffleWinnerEvent =
    changetype<RequestedRaffleWinner>(newMockEvent())

  requestedRaffleWinnerEvent.parameters = new Array()

  requestedRaffleWinnerEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return requestedRaffleWinnerEvent
}

export function createWinnerPickedEvent(winner: Address): WinnerPicked {
  let winnerPickedEvent = changetype<WinnerPicked>(newMockEvent())

  winnerPickedEvent.parameters = new Array()

  winnerPickedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )

  return winnerPickedEvent
}
