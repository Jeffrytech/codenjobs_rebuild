import {
  ProfileListContainer,
  ProfileListWrapper,
  ProfileListSection,
} from "./ProfileListCSS";

const ProfileList = ({
  children
}) => {
  return <ProfileListContainer>
    <ProfileListWrapper>
      <ProfileListSection>
        {children}
      </ProfileListSection>
    </ProfileListWrapper>
  </ProfileListContainer>;
};

export default ProfileList;