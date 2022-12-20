// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT

export interface Transfer {

    extrinsicHash?: string;

    amount: string;

    to: string;

    from: string;

    fee: string;

    block: string;

    extrinsicId?: string;

    success: boolean;

}


export interface Reward {

    amount: string;

    isReward: boolean;

    era?: number;

    validator?: string;

}


export interface Extrinsic {

    hash: string;

    module: string;

    call: string;

    fee: string;

    success: boolean;

}


export interface IndividualExposure {

    who: string;

    value: string;

}


