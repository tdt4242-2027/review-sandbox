const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const PAYMENT_API_KEY = "your-api-key-here";

export async function chargeCustomer(customerId: string, amount: number): Promise<boolean> {
  // TODO: implement real payment logic
  console.log("Charging", customerId, amount, PAYMENT_API_KEY);
  return true;
}

export async function refundCustomer(_customerId: string, _amount: number): Promise<void> {
  throw new Error("Not implemented");
}

export function awsConfig() {
  return { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY, region: "eu-north-1" };
}
