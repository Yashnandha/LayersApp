import React, { FC } from 'react';
import {
    StyleSheet,
    View,
    TextStyle,
    TextInput,
    ViewStyle,
    Text,
    TouchableOpacity,
    TextInputProps,
    TextPropTypes,
    KeyboardTypeOptions,
    ReturnKeyTypeOptions,
    Image,
} from 'react-native';

interface InputProps {
    label?: string | undefined;
    error?: string | undefined;
    placeholder?: string | undefined;
    inputStyle?: ViewStyle | TextStyle | undefined;
    containerStyle?: ViewStyle | undefined;
    labelStyle?: TextStyle | undefined;
    errorStyle?: TextStyle | undefined;
    onChangeText?: ((text: string) => void) | undefined;
    value?: string | undefined;
    secureTextEntry?: boolean | undefined;
    keyboardType?: KeyboardTypeOptions | undefined;
    returnKeyType?: ReturnKeyTypeOptions | undefined;
    multiline?: boolean | undefined;
    maxLength?: number | undefined;
    numberOfLines?: number | undefined;
}

const InputContainer: FC<InputProps> = ({
    placeholder,
    inputStyle,
    containerStyle,
    label,
    labelStyle,
    onChangeText,
    secureTextEntry,
    value,
    error,
    errorStyle,
    keyboardType,
    returnKeyType,
    multiline,
    maxLength,
    numberOfLines,
}) => {
    return (
        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
            {label && <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>}
            <View style={[styles.containerStyle, containerStyle]}>
                <TextInput
                    style={[styles.inputViewStyle, inputStyle]}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    multiline={multiline}
                    maxLength={maxLength}
                    numberOfLines={numberOfLines}
                />
            </View>
            {error && <Text style={[styles.errorStyle, errorStyle]}>{error}</Text>}
        </View>
    );
};

export default InputContainer;

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderColor: '#808080',
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputViewStyle: {
        flex: 1,
        paddingVertical: 0,
        height: 40,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        borderRadius: 7
    },
    labelStyle: {
        fontSize: 14,
        lineHeight: 25,
        color: '#707070',
    },
    errorStyle: {
        fontSize: 14,
        lineHeight: 25,
        color: '#ff5050',
    },
    eyeIcon: {
        height: 20,
        width: 20,
    },
});
