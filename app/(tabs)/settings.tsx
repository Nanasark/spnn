import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput'; // Assuming you have this component
import { PlainParallaxScrollView } from '@/components/PlainParallaxScrollView';
import { useThemeColor } from '@/hooks/useThemeColor';
import SpaceLogin from '@/components/ninja/Login';

// Registration Modal
const RegistrationModal = ({ visible, onClose }: any) => (
  <Modal
    transparent={true}
    animationType="slide"
    visible={visible}
    onRequestClose={onClose}
  >
    <ThemedView className="flex-1 justify-center items-center bg-black bg-opacity-60">
      <ThemedView style={styles.modalContainer}>
        <ThemedInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
        />
        <ThemedInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#999"
        />
        <ThemedInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {/* Handle registration */}}
        >
          <ThemedText style={styles.buttonText}>Register</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onClose}
        >
          <ThemedText style={styles.buttonText}>Close</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  </Modal>
);

// Login Modal
const LoginModal = ({ visible, onClose }: any) => (
  <Modal
    transparent={true}
    animationType="slide"
    visible={visible}
    onRequestClose={onClose}
  >
    <ThemedView className="flex-1 justify-center items-center bg-black bg-opacity-60">
      <ThemedView style={styles.modalContainer}>
        <ThemedInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
        />
        <ThemedInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {/* Handle login */}}
        >
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onClose}
        >
          <ThemedText style={styles.buttonText}>Close</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  </Modal>
);

// SpaceLogin Modal
const SpaceLoginModal = ({ visible, onClose }: any) => (
  <Modal
    transparent={true}
    animationType="slide"
    visible={visible}
    onRequestClose={onClose}
  >
    <ThemedView className="flex-1 justify-center items-center bg-black bg-opacity-60">
      <ThemedView style={styles.modalContainer}>
        <SpaceLogin />
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={onClose}
        >
          <ThemedText style={styles.buttonText}>Close</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  </Modal>
);

export default function Settings() {
  const [isRegistrationModalVisible, setRegistrationModalVisible] = useState(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [isSpaceLoginModalVisible, setSpaceLoginModalVisible] = useState(false);

  const iconColor = useThemeColor({}, 'text');

  return (
    <PlainParallaxScrollView
      className="bg-gray-900"
      headerClassName="bg-[#F2FBE0]"
      header={
        <ThemedView className="bg-transparent flex justify-center items-center p-4 border-b border-gray-300">
          <ThemedText className="text-black text-2xl font-bold">Settings</ThemedText>
        </ThemedView>
      }
    >
      <ThemedView className="bg-[#274156] h-screen flex-1 p-4">
        <ThemedView className="bg-transparent flex-1 items-center justify-center">
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setRegistrationModalVisible(true)}
          >
            <ThemedText style={styles.buttonText}>Register</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setLoginModalVisible(true)}
          >
            <ThemedText style={styles.buttonText}>Login</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setSpaceLoginModalVisible(true)}
          >
            <Ionicons name="person-circle" size={50} color={iconColor} />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      <RegistrationModal
        visible={isRegistrationModalVisible}
        onClose={() => setRegistrationModalVisible(false)}
      />
      <LoginModal
        visible={isLoginModalVisible}
        onClose={() => setLoginModalVisible(false)}
      />
      <SpaceLoginModal
        visible={isSpaceLoginModalVisible}
        onClose={() => setSpaceLoginModalVisible(false)}
      />
    </PlainParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  iconButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff', // Border color for the icon button
    backgroundColor: '#1f1f1f', // Background color for the icon button
  },
});
