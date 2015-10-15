/**
 * pubfood
 * Copyright (c) 2015 Yieldbot, Inc. - All rights reserved.
 *
 * Events live here..
 */

'use strict';

var util = require('./util');
var EventEmitter = require('eventemitter3');

/**
 * Pubfood event class
 * @class
 * @memberof pubfood
 * @return {pubfood.PubfoodEvent}
 */
function PubfoodEvent() {
  // PubfoodEvent constructor
}

/**
 * @type {object}
 * @description Available event types
 * @name pubfood.PubfoodEvent.EVENT_TYPE
 * @property {string} BID_LIB_START Bid provider library load started
 * @property {string} BID_LIB_LOADED Bid provider library loaded
 * @property {string} BID_START Action started.<br>e.g [BidProvider.init]{@link pubfood/provider.BidProvider#init}
 * @property {string} BID_NEXT Next item in data stream ready.<br>e.g [BidProvider.refresh]{@link pubfood/provider.BidProvider#init} raises a [NEXT]{@link pubfood/events.EVENT_TYPE.NEXT} event for each bid.
 * @property {string} BID_COMPLETE Action is complete
 * @property {string} AUCTION_LIB_START Auction provider library load started
 * @property {string} AUCTION_LIB_LOADED Auction provider library loaded
 * @property {string} AUCTION_GO Start the publisher auction
 * @property {string} ERROR Error event raised
 */
PubfoodEvent.prototype.EVENT_TYPE = {
  BID_LIB_START: 'bplibstart',
  BID_LIB_LOADED: 'bplibloaded',
  BID_START: 'bidstart',
  BID_NEXT: 'bidnext',
  BID_COMPLETE: 'bidcomplete',
  AUCTION_LIB_START: 'aplibstart',
  AUCTION_LIB_LOADED: 'aplibloaded',
  AUCTION_GO: 'auctiongo',
  AUCTION_COMPLETE: 'auctioncomplete',
  ERROR: 'error'
};

/**
 * publish an event
 * @param {string} type the event type
 * @param {*} data the event data
 * @return {boolean} Indication if we've emitted an event.
 */
PubfoodEvent.prototype.publish = function(type, data) {
  return this.emit(type, {
    ts: (+new Date()),
    type: type,
    data: data
  });
};

/**
 * Emit an event to all registered event listeners.
 * @function emit
 * @memberof pubfood.PubfoodEvent
 * @see https://github.com/primus/eventemitter3
 */

/**
 * Register a new EventListener for the given event.
 * @function on
 * @memberof pubfood.PubfoodEvent
 * @see https://github.com/primus/eventemitter3
 */

/**
 * Add an EventListener that's only called once.
 * @function once
 * @memberof pubfood.PubfoodEvent
 * @see https://github.com/primus/eventemitter3
 */

/**
 * Remove event listeners.
 * @function removeListener
 * @memberof pubfood.PubfoodEvent
 * @see https://github.com/primus/eventemitter3
 */

/**
 * Remove all listeners or only the listeners for the specified event.
 * @function removeAllListeners
 * @memberof pubfood.PubfoodEvent
 * @see https://github.com/primus/eventemitter3
 */

/**
 * Return a list of assigned event listeners.
 * @function listeners
 * @memberof pubfood.PubfoodEvent
 * @see https://github.com/primus/eventemitter3
 */

/**
 * @type {object}
 * @name pubfood.PubfoodEvent.EventStructure
 * @memberof pubfood.PubfoodEvent
 * @property {string} ts The timestamp of the event
 * @property {string} type The event type
 * @property {object} data Data structure for each event type
 * @property {object} data.ERROR
 * @property {*} data.ERROR.stackTrace
 * @property {object} data.AUCTION_LIB_START
 * @property {string} data.AUCTION_LIB_START.auctionProvider
 * @property {object} data.AUCTION_LIB_LOADED
 * @property {string} data.AUCTION_LIB_LOADED.auctionProvider
 * @property {object} data.AUCTION_GO
 * @property {object} data.BID_LIB_START
 * @property {string} data.BID_LIB_START.bidProvider
 * @property {object} data.BID_LIB_LOADED
 * @property {string} data.BID_LIB_LOADED.bidProvider
 * @property {object} data.BID_NEXT
 * @property {string} data.BID_NEXT.id
 * @property {array.<number, number>} data.BID_NEXT.sizes
 * @property {string} data.BID_NEXT.value
 * @property {object} data.BID_NEXT.customTargetting
 * @property {object} data.BID_START
 * @property {string} data.BID_START.bidProvider
 * @property {object} data.BID_COMPLETE
 * @property {string} data.BID_COMPLETE.bidProvider
 */

util.extends(PubfoodEvent, EventEmitter);
module.exports = new PubfoodEvent();
