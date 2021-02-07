import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  Easing
} from 'react-native';
import { Router, Switch, Route } from './routing';
import Landing from './landing/landing';
import Authors from './authors/Authors';

export default function App() {

    useEffect(() => {
        console.log("ComponentDidMount() Called.");
        // Animated.timing(
        //     fadeAnim,
        //     {
        //       toValue: 1,
        //       duration: 10000,
        //     }
        //   ).start();
    });
    

    return (
        <>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Landing {...props} />} />
            <Route path="/authors" render={props => <Authors {...props} />} />
          </Switch>
        </Router>

        </>
    );
}

const styles = StyleSheet.create({


});