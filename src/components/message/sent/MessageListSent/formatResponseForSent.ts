const formatResponseForSent = ({
  message_id,
  message_subject,

  message_response_to,
  message_response_created_at,
  message_response_text,
  message_response_id,
}) => {
  return {
    id: message_id,
    subject: `re: ${message_subject}`,

    to: message_response_to,
    created_at: message_response_created_at,
    text: message_response_text,

    message_response_id,
  };
};

export default formatResponseForSent;