import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './redux/features/counter/counterSlice';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <TouchableOpacity
          aria-label="Increment value"
          onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
