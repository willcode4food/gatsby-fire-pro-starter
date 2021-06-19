import Avatar from 'components/Avatar'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { DEFAULT_AVATAR_SIZE, PROFILE_IMAGE_SIZE } from 'utils/constants'
import { getStorageImagePublicUrl } from 'utils/firebaseHelpers'
import { DefaultAvatarBox, DefaultAvatarCircle, DefaultAvatarInitials, DefaultAvatarWrapper } from './styles'
// See https://codepen.io/AllThingsSmitty/pen/dWmmQp
function ProfileAvatar({
    alt = 'Member Avater',
    defaultAvatarThemeIndex = 3,
    displayText,
    circleHeight = DEFAULT_AVATAR_SIZE,
    initialsHeight = DEFAULT_AVATAR_SIZE,
    imageFileName,
    profileImageSize = PROFILE_IMAGE_SIZE,
    width = DEFAULT_AVATAR_SIZE,
}) {
    const [imageUrl, setImageUrl] = useState(null)
    const [caption, setCaption] = useState('')
    const [imageHash] = useState(Date.now())

    useEffect(() => {
        setImageUrl(imageFileName)
        setCaption(displayText)
    }, [])

    return (
        <>
            {imageUrl ? (
                <DefaultAvatarWrapper>
                    <Avatar
                        size={[profileImageSize, profileImageSize]}
                        src={`${getStorageImagePublicUrl(imageUrl)}&bust=${imageHash}`}
                        alt={alt}
                    />
                </DefaultAvatarWrapper>
            ) : (
                <DefaultAvatarWrapper>
                    <DefaultAvatarBox>
                        <DefaultAvatarCircle
                            circleHeight={circleHeight}
                            themeIndex={defaultAvatarThemeIndex}
                            width={width}
                        >
                            <DefaultAvatarInitials
                                initialsHeight={initialsHeight}
                                themeIndex={defaultAvatarThemeIndex}
                                width={width}
                            >
                                {caption}
                            </DefaultAvatarInitials>
                        </DefaultAvatarCircle>
                    </DefaultAvatarBox>
                </DefaultAvatarWrapper>
            )}
        </>
    )
}

ProfileAvatar.propTypes = {
    alt: PropTypes.string,
    defaultAvatarThemeIndex: PropTypes.number,
    displayText: PropTypes.string.isRequired,
    circleHeight: PropTypes.string,
    initialsHeight: PropTypes.string,
    imageFileName: PropTypes.string,
    profileImageSize: PropTypes.number,
    width: PropTypes.string,
}
export default ProfileAvatar
