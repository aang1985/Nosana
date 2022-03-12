
let HUBSPOT_FORM_URL =
  "https://api.hsforms.com/submissions/v3/integration/submit";

const { PORTALID, FORMID } = process.env;
const { PORTALID } = process.env;

module.exports.sendConfirmation = async (event) => {
  if (event.httpMethod !== "POST" || !event.body) {
@@ -20,11 +20,11 @@ module.exports.sendConfirmation = async (event) => {
    };
  }

  const data = qs.parse(event.body);
  const payload = { fields: [{ name: "email", value: data.email }] };
  const { email, formId } = qs.parse(event.body);
  const payload = { fields: [{ name: "email", value: email }] };

  try {
    await axios.post(`${HUBSPOT_FORM_URL}/${PORTALID}/${FORMID}`, payload, {
    await axios.post(`${HUBSPOT_FORM_URL}/${PORTALID}/${formId}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
