import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { Container } from 'native-base';
import BaseHeaderComponent from '../BaseHeaderComponent';

class MoreComponent extends BaseHeaderComponent {
  renderContent() {
    return (
      <Container></Container>
    );
  }
}

export default MoreComponent;
