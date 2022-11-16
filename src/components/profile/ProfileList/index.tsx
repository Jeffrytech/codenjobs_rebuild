import {
  ProfileListContainer,
  ProfileListWrapper,
  ProfileListSection,
  ProfileUserFileListContainer,
  ProfileUserFileListSection,
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


export const ProfileUserFileList = ({
  children,
  includeMoreList = 0
}) => {
  return <ProfileUserFileListContainer>
    <ProfileListWrapper>
      <ProfileUserFileListSection 
        // id="ProfileUserFileListSection" 
        $includeMoreList={includeMoreList}
      >
        {children}
      </ProfileUserFileListSection>
    </ProfileListWrapper>
  </ProfileUserFileListContainer>;
};

export default ProfileList;