import { FileField, InputField, SliderField, StandardSubmitButton, StateSelectField } from 'components/Forms/FormFields'
import {
    FormBox,
    FormBoxCenter,
    FormFlex,
    FormFlexInner,
    FormFlexInnerBox,
    FormWrapper,
    FormWrapperBox,
} from 'components/Forms/FormLayout'
import { ErrorIcon, ErrorMessage, FormHeader } from 'components/Forms/FormStyles'
import ProfileAvatar from 'components/ProfileAvatar'
import RotateLeftIcon from 'components/RotateLeftIcon'
import RotateRightIcon from 'components/RotateRightIcon'
import SessionContext from 'context/SessionContext'
import useFirebaseApp from 'hooks/firebase/useFirebaseApp'
import PropTypes from 'prop-types'
import React, { useContext, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useForm } from 'react-hook-form'
import { ACCEPTED_IMAGE_FORMATS, FIREBASE, PROFILE_IMAGE_SIZE } from 'utils/constants'
import {
    AvatarEditorBox,
    ImageEditorControlsBox,
    ImageEditorControlsCenterBox,
    ImageEditorControlsWrapper,
} from './styles'

function AccountProfileForm({ saveData = () => {} }) {
    const { register, handleSubmit, errors } = useForm()
    const [isEditingAvatar, setIsEditingAvatar] = useState(false)
    const [profileImageBuffer, setProfileImageBuffer] = useState(null)
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [accountProfileFormError, setAccountProfileFormError] = useState(null)
    const editor = useRef(null)
    const { authUser } = useContext(SessionContext)
    const { storage } = useFirebaseApp({ firebaseConfig: FIREBASE.CONFIG })

    // function resetForm(data) {
    //     reset(
    //         {
    //             ...data,
    //         },
    //         {
    //             errors: true, // errors will not be reset
    //             dirtyFields: true, // dirtyFields will not be reset
    //             isDirty: true, // dirty will not be reset
    //             isSubmitted: false,
    //             touched: false,
    //             isValid: false,
    //             submitCount: false,
    //         }
    //     )
    // }

    // function isLoginProviderEmail() {
    //     return queryData && queryData?.returnSingleUser?.loginProvider === LOGIN_PROVIDER.EMAIL
    // }

    const onScale = (event) => {
        setScale(parseFloat(event.target.value))
    }

    const onSubmit = async (data) => {
        // eslint-disable-next-line no-unused-vars
        const { password, confirmPassword, ...userData } = data

        if (!userData.username) {
            setAccountProfileFormError({ message: 'Please give yourself a unique username' })
            return
        }

        const imageUrlFromSave = await handleEditedImage()
        setAccountProfileFormError(null)
        try {
            saveData(data)
        } catch (e) {
            const { message } = e
            setAccountProfileFormError(message)
            console.log(message)
        }
    }

    const onFileChanged = (event) => {
        setAccountProfileFormError(null)
        const profileImageName = event.target.files[0].name
        const isValidImageFile = ACCEPTED_IMAGE_FORMATS.filter((type) => {
            return profileImageName.indexOf(type) !== -1
        })
        if (isValidImageFile.length === 0) {
            // is not a valid file extension (.jpg, jpeg, png)
            setAccountProfileFormError({ message: 'Make sure your photo is a JPG, PNG or GIF' })
            return
        }
        setProfileImageBuffer(event.target.files[0])
        setIsEditingAvatar(true)
    }
    const onRotateLeft = () => {
        setRotate(rotate - 90)
    }
    const onRotateRight = () => {
        setRotate(rotate + 90)
    }
    async function handleEditedImage() {
        const { uid } = authUser
        let imagePath = ''

        if (profileImageBuffer) {
            // send photo to Google Cloud Storage
            try {
                const imgObj = editor.current.getImageScaledToCanvas()
                const imgBlob = await new Promise((resolve) => {
                    imgObj.toBlob((blob) => resolve(blob), 'image/png', 0.95)
                })

                const storageRef = storage.ref()
                imagePath = `${FIREBASE.STORAGE.PROFILE_IMG_FOLDER}/${uid}.png`
                const profileImageRef = storageRef.child(imagePath)
                await profileImageRef.put(imgBlob)
                // setProfileImageUrl(`${FIREBASE.STORAGE.BASE_URL}/${imagePath}`)
            } catch (error) {
                // eslint-disable-next-line
                setAccountProfileFormError(error)
                setIsEditingAvatar(false)
            }
            setIsEditingAvatar(false)
            return profileImageBuffer ? `${uid}.png` : null
        }
        return ''
    }
    return (
        <>
            {
                <FormWrapper>
                    <FormWrapperBox>
                        <FormHeader>Account</FormHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormFlex>
                                {accountProfileFormError && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">{accountProfileFormError.message}</ErrorMessage>
                                    </FormBox>
                                )}
                                {isEditingAvatar && (
                                    <>
                                        <AvatarEditorBox>
                                            <AvatarEditor
                                                ref={editor}
                                                border={50}
                                                borderRadius={999}
                                                color={[4, 50, 56, 0.6]}
                                                height={PROFILE_IMAGE_SIZE}
                                                image={profileImageBuffer}
                                                rotate={parseFloat(rotate)} // RGBA
                                                scale={parseFloat(scale)}
                                                width={PROFILE_IMAGE_SIZE}
                                            />
                                        </AvatarEditorBox>
                                        <FormBox>
                                            <ImageEditorControlsWrapper>
                                                <ImageEditorControlsBox onClick={onRotateLeft} onKeyDown={onRotateLeft}>
                                                    <RotateLeftIcon height={30} tabIndex={-1} width={30} />
                                                </ImageEditorControlsBox>
                                                <ImageEditorControlsCenterBox>
                                                    <SliderField
                                                        defaultValue={1}
                                                        max="2"
                                                        min="0.1"
                                                        onChange={onScale}
                                                        step="0.01"
                                                        tabIndex={-1}
                                                        width={[1]}
                                                        type="range"
                                                    ></SliderField>
                                                </ImageEditorControlsCenterBox>
                                                <ImageEditorControlsBox
                                                    onClick={onRotateRight}
                                                    onKeyDown={onRotateRight}
                                                >
                                                    <RotateRightIcon height={30} tabIndex={-1} width={30} />
                                                </ImageEditorControlsBox>
                                            </ImageEditorControlsWrapper>
                                        </FormBox>
                                    </>
                                )}
                                <FormBox>
                                    {!isEditingAvatar && (
                                        <ProfileAvatar
                                            key={authUser.uid}
                                            imageFileName={null}
                                            defaultAvatarThemeIndex={0}
                                            displayText={''}
                                        />
                                    )}
                                </FormBox>
                                <FormBox>
                                    {!isEditingAvatar && (
                                        <FormBoxCenter>
                                            <FileField onChange={onFileChanged} tabIndex={-1} />
                                        </FormBoxCenter>
                                    )}
                                </FormBox>
                                {/* <AuthIdentifierLabel>{queryData?.returnSingleUser?.email}</AuthIdentifierLabel> */}
                                <FormBox>
                                    <InputField
                                        register={{
                                            register,
                                            required: true,
                                            minLength: 2,
                                        }}
                                        name="username"
                                        placeholder="Username"
                                        type="text"
                                        aria-label="Username"
                                        defaultValue={null}
                                    />
                                </FormBox>
                                {errors?.username?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">Please enter a valid username</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.username?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">
                                            Usernames must be at least 2 characters long
                                        </ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="firstName"
                                        placeholder="First Name"
                                        register={{ register, required: true, minLength: 2 }}
                                        type="text"
                                        aria-label="First Name"
                                        defaultValue={null}
                                    />
                                </FormBox>
                                {errors?.firstName && errors?.firstName?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">First Name is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.firstName && errors?.firstName?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">
                                            First name must be at least 2 characters
                                        </ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="lastName"
                                        placeholder="Last Name"
                                        register={{ register, required: true, minLength: 2 }}
                                        type="text"
                                        aria-label="Last Name"
                                        defaultValue={null}
                                    />
                                </FormBox>
                                {errors?.lastName && errors?.lastName?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">Last Name is required</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.lastName && errors?.lastName?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">
                                            Last name must be at least 2 characters
                                        </ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        name="city"
                                        placeholder="City"
                                        register={{ register, minLength: 2 }}
                                        type="text"
                                        aria-label="City"
                                        defaultValue={null}
                                    />
                                </FormBox>
                                {errors?.city && errors?.city?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">City must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <StateSelectField
                                        data-testid="state"
                                        name="state"
                                        aria-label="state"
                                        register={{ register, required: true }}
                                        defaultValue={null}
                                    />
                                </FormBox>
                                {errors?.state && errors?.state?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">State is required</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <InputField
                                        register={{ register, required: true, minLength: 5 }}
                                        name="zip"
                                        placeholder="zip"
                                        type="text"
                                        aria-label="Zip"
                                        defaultValue={null}
                                    />
                                </FormBox>
                                {errors?.zip && errors?.zip?.type === 'minLength' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">Zip must be at least 2 characters</ErrorMessage>
                                    </FormBox>
                                )}
                                {errors?.zip && errors?.zip?.type === 'required' && (
                                    <FormBox>
                                        <ErrorIcon />
                                        <ErrorMessage role="alert">Zip is required</ErrorMessage>
                                    </FormBox>
                                )}
                                <FormBox>
                                    <FormFlexInner>
                                        <FormFlexInnerBox>
                                            <StandardSubmitButton
                                                role="button"
                                                aria-label="Save Profile"
                                                text="Save Profile"
                                            />
                                        </FormFlexInnerBox>
                                    </FormFlexInner>
                                </FormBox>
                                {/* {isLoginProviderEmail() && (
                                    <FormBox>
                                        <StyledLink to="/account-security" name="securityLink" role="link" state={null}>
                                            Update Email and Password
                                        </StyledLink>
                                    </FormBox>
                                )} */}
                            </FormFlex>
                        </form>
                    </FormWrapperBox>
                </FormWrapper>
            }
        </>
    )
}

AccountProfileForm.propTypes = {
    saveData: PropTypes.func,
}

export default AccountProfileForm
