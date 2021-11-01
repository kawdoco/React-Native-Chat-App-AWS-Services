// @ts-check
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

import 'react-native-get-random-values';
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';


const { Message, ChatRoom, ChatRoomUser, User } = initSchema(schema);

export {
  Message,
  ChatRoom,
  ChatRoomUser,
  User
};