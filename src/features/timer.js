import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/countDown';
import { Timing } from './timing';
import { RoundedButton } from '../components/roundedButton';
import { spacing } from '../utils/sizes';
import { colours } from '../utils/colours';

  const pattern = [200, 500, 200];


export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(pattern);
    setIsStarted(false)
    setProgress(1)
    reset()
    onTimerEnd(focusSubject);
  };


  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xl, paddingBottom: spacing.xl }}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paggingTop: spacing.xxl }}>
        <ProgressBar
          progress={progress}
          color={colours.green}
          style={{ height: 8 }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
      <View style={styles.buttonWrapper}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'yellow',
  },
  timingWrapper: {
    flexDirection: 'row',
    flex: 0.1,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
  },
  clearSubject: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 0.1,
    paddingTop: spacing.xxl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.lg,
    paddingTop: spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: colours.white, fontWeight: 'bold', textAlign: 'center' },
  task: { color: colours.white, textAlign: 'center' },
});
