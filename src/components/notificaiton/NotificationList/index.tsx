import { useEffect, useState } from "react";
import Link from "next/link";

import moment from "moment";
import Settings from "@material-ui/icons/Settings";

import { deleteEveryNotifications, findNotificationList, findUnreadNotificationList, readUnreadNotifications } from "../../../api/privateNotification";
import { COMPANY_LOGO_WHITE, COMPANY_NAME } from "../../../config/environment";
import ExternalLink from "../../ExternalLink";
import UserImage from "../../UserImage";
import NotificationDropdown from "../NotificationDropdown";

import { 
  NotificationSectionContainer, NotificationPageTitle,
  NotificationListContainer, NotificationListWrapper, 
  NotificationTitle, NotificationCreated, NotificationMessage, 
  NotifierWrapper, NotificationWrapper, NotificationSettingsText, NotificationSettingsWrapper, NotificationListButtonsWrapper, DeleteNotificationList,
} from "./NotificationListCSS";
import { red } from "../../../design/colors";

const NotificationList = ({
  user,
  page,
  read,
}) => {
  const [notificationList, setNotificationList] = useState(null);

  const findNotifications = async (
    // page: Number, 
    read: Boolean
  ) => {
    let notifications;

    // alert(read);
    if (read === null) {
      const { data, error } = await findNotificationList();
      if (error) {
        console.log("findNotificationList error");
        console.log(error);
        // TODO
        // Show error notification here

        return;
      }

      notifications = data;
    } else {
      const { data, error } = await findUnreadNotificationList();

      if (error) {
        console.log("findNotificationList error");
        console.log(error);
        // TODO
        // Show error notification here

        return;
      }

      notifications = data;

      await readUnreadNotifications();
    }

    // return notifications;

    setNotificationList(notifications);
  };

  useEffect(() => {
    findNotifications(
      // page, 
      read
    );
  }, [
    // page, 
    read
  ]);

  // console.log("user");
  // console.log(user);

  // console.log("notificationList");
  // console.log(notificationList);

  if (notificationList === null) {
    return null;
  }

  return (
    <NotificationSectionContainer>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NotificationPageTitle>
          Notifications
        </NotificationPageTitle>
        <Link href="/settings/notification" >
          <NotificationSettingsWrapper>
            <Settings />
            <NotificationSettingsText>
              Settings
            </NotificationSettingsText>
          </NotificationSettingsWrapper>
        </Link>
      </div>

      {notificationList.length > 0 && <NotificationListButtonsWrapper>
        <DeleteNotificationList
          onClick={async () => {
            const response = confirm("Do you really want to delete every notifications?");

            if (response === true) {
              // alert("Delete all");

              const { data, error } = await deleteEveryNotifications();

              if (error) {
                console.log("deleteEveryNotifications error");
                console.error(error);
              }

              if (data === true) {
                setNotificationList([]);
              }

            }
          }}
        >
          Delete all
        </DeleteNotificationList>
      </NotificationListButtonsWrapper>}
      
      {notificationList.length > 0 ? <NotificationListContainer>
        {notificationList.map((notification, index) => {
          const {
            notifier_username,
            notifier_image,

            notification_id,
            notification_title,
            notification_message,
            notification_read,
            notification_type,
            notification_link,
            notification_created_at,
            notification_updated_at,
          } = notification;

          return (
            <NotificationListWrapper
              $last={index === notificationList.length -1}
            >
              <NotifierWrapper>
                <ExternalLink href={`/user/${notifier_username}`}>
                  {/* <UsernameWrapper>
                    <Username username={username} />
                  </UsernameWrapper> */}
                  {/* <Avatar
                    name={notifier_username}
                    size="scale800"
                    // src={user.image || ""}
                    src={notifier_image || COMPANY_LOGO_WHITE}
                  /> */}
                  <UserImage 
                    username={notifier_username}
                    image={notifier_image || COMPANY_LOGO_WHITE}
                  />
                </ExternalLink>
                
              </NotifierWrapper>

              <NotificationWrapper>
                <div 
                  style={{
                    display: "flex",
                  }}
                >
                  <ExternalLink href={notification_link} >
                    <NotificationTitle>
                      {notification_title}
                    </NotificationTitle>
                  </ExternalLink>

                  <NotificationDropdown 
                    notification_id={notification_id}
                    notificationList={notificationList}
                    setNotificationList={setNotificationList}
                  />
                </div>

                <NotificationCreated>
                  {moment.utc(notification_created_at).fromNow()}
                </NotificationCreated>

                <NotificationMessage>
                  {notification_message}
                </NotificationMessage>
              </NotificationWrapper>
            </NotificationListWrapper>
          );
        })}
      </NotificationListContainer> : <NotificationListWrapper
        $last={true}

        style={{
          border: "1px solid #efefef",
          borderRadius: "0.5rem",

          margin: "auto 1rem",
        }}
      >
        <NotificationWrapper>
          <Link href={read === false ? "/notifications/all" : "/"} >
            <NotificationTitle
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <Avatar
                name={COMPANY_NAME}
                size="scale800"
                // src={user.image || ""}
                src={COMPANY_LOGO_WHITE}
              /> */}
              <span>
                {read === false ? `You don't have any unread notification` : "You don't have any notification"}
              </span>
            </NotificationTitle>
              
          </Link>
        </NotificationWrapper>
      </NotificationListWrapper>}

    </NotificationSectionContainer>
  );
};

export default NotificationList;