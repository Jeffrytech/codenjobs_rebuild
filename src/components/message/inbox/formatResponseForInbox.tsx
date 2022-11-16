const formatResponseForInbox = ({
  message_id,
  message_to,
  message_subject,
  message_sender,

  message_response_id,
  message_response_to,
  message_response_created_at,
  message_response_text,
}) => {
  let from;
  if (message_response_to === message_sender) {
    from = message_to;
  };

  if (message_response_to === message_to) {
    from = message_sender;
  }

  return {
    id: message_id,
    // from: (message_response_to === message_sender) ? message_to : message_sender,
    from,
    subject: `re: ${message_subject}`,
    created_at: message_response_created_at,
    text: message_response_text,

    message_response_id,
  };
};

export default formatResponseForInbox;