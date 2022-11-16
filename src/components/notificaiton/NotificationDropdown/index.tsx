import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
import { deleteNotification } from '../../../api/privateNotification';
import { blue } from '../../../design/colors';
import { useOnOutsideClick } from '../../../useOutsideClick';

import {
  NotificationDropdownButtonWrapper,
  NotificationDropdownContainer,
  NotificationDropdownContent,
  NotificationDropdownContentOptionWrapper
} from "./NotificationDropdownCSS";

const NotificationDropdown = ({
  notification_id,
    
  notificationList,
  setNotificationList,
}) => {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

  const { innerBorderRef } = useOnOutsideClick(() => {
    setShowNotificationDropdown(false);
  });

  return (
    <NotificationDropdownContainer>
      <NotificationDropdownButtonWrapper>
        <NotificationDropdownButtonWrapper
          onClick={() => {
            setShowNotificationDropdown(!showNotificationDropdown);
          }}
        >
          <MoreHorizIcon />
        </NotificationDropdownButtonWrapper>
      </NotificationDropdownButtonWrapper>
      {/* {showPeopleCategoriesDropdown && <TopNavDropdownContent></TopNavDropdownContent> */}
      {showNotificationDropdown && <NotificationDropdownContent
        ref={innerBorderRef}
      >
        <NotificationDropdownContentOptionWrapper 
          onClick={async () => {
            const confirmed = confirm("Do you really want to remove this?");

            if (confirmed) {
              const { data: result, error: deleteNotificationError } = await deleteNotification({ id: notification_id });

              if (deleteNotificationError) {
                alert("Fail to delete the notification");

                console.log("deleteNotificationError");
                console.error(deleteNotificationError);
                                
                return;
              }
                            
              if (result) {
                setShowNotificationDropdown(false);

                alert("The notification was removed");

                const newNotificationList = notificationList.filter(notification => {
                  return notification.notification_id !== notification_id;
                });

                setNotificationList(newNotificationList);

                // Remove in the list later
              } else {
                alert("Something went wrong at the server");
              }

            } else {
              return;
            }
          }}
        >
          <span style={{
            marginRight: "0.25rem",
          }}>
                        Delete
            {/* Recruiters */}
          </span>
        </NotificationDropdownContentOptionWrapper>
      </NotificationDropdownContent>}
    </NotificationDropdownContainer>
  );


};

export default NotificationDropdown;
