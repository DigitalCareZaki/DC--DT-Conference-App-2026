import { StyleSheet, View } from 'react-native'
import React from 'react'
import { common_styles } from '../../../utils/common_styles'
import { InputField, Text } from '../../../components'
import { SIZES } from '../../../constants'
import { facebook_icon, instagram_icon, linked_in_icon, twitter_icon, youtube_icon } from '../../../assets/icons'

const SocialMediaLinks = () => {
    return (
        <View style={common_styles.flex_1} >
            <Text
                mt={SIZES.padding2}
                text={"(Optional – Share your social profiles to help others connect with you during the event.)"} />

            <InputField
                label={"Facebook Link"}
                leftIcon={facebook_icon}
                placeholder={"Enter your Facebook Profile"}
            />
            <InputField
                label={"Instagram Link"}
                leftIcon={instagram_icon}
                placeholder={"Enter your Instagram Profile"}
            />
            <InputField
                label={"Linked In Link"}
                leftIcon={linked_in_icon}
                placeholder={"Enter your Linked In Profile"}
            />
            <InputField
                label={"Youtube Link"}
                leftIcon={youtube_icon}
                placeholder={"Enter your Youtube Profile"}
            />
            <InputField
                label={"Twitter Link"}
                leftIcon={twitter_icon}
                placeholder={"Enter your Twitter Profile"}
            />
        </View>
    )
}

export default SocialMediaLinks

const styles = StyleSheet.create({})