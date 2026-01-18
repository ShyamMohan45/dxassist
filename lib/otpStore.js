const otpMap = new Map()

export function saveEmailOTP(email, otp) {
  otpMap.set(email, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  })
}

export function verifyEmailOTP(email, otp) {
  const data = otpMap.get(email)
  if (!data) return false

  if (Date.now() > data.expiresAt) {
    otpMap.delete(email)
    return false
  }

  if (data.otp !== otp) return false

  otpMap.delete(email)
  return true
}
