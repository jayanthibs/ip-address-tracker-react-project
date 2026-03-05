function useValidateIpAddress(value) {
const ipv4Regex =
/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

const ipv6Regex =
/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::1|::)$/;

let error = "";

if (!value.trim()) {
error = "IP Address is required";
} else if (!ipv4Regex.test(value) && !ipv6Regex.test(value)) {
error = "Enter valid IPv4 or IPv6 address.";
}

return {
errors: error,
isValid: error === "",
};
}

export default useValidateIpAddress;