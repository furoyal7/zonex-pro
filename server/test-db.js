import "dotenv/config";
import pkg from "pg";
const { Client } = pkg;

const PASS = "antex2026pass";
const PROJECT = "mxmefnsszkxikyoksxeg";
const HOSTS = [
  "aws-1-eu-central-1.pooler.supabase.com:5432",   // Session Pooler
  "aws-1-eu-central-1.pooler.supabase.com:6543",   // Transaction Pooler
  "db.mxmefnsszkxikyoksxeg.supabase.co:5432"       // Direct Host
];

async function test(host) {
  const user = `postgres.${PROJECT}`;
  console.log(`Testing: ${user} @ ${host}`);
  
  const client = new Client({
    user,
    password: PASS,
    host: host.split(":")[0],
    port: parseInt(host.split(":")[1]),
    database: "postgres",
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("✅ SUCCESS!");
    await client.end();
    return true;
  } catch (err) {
    console.log(`❌ FAILED: ${err.message}`);
    return false;
  }
}

async function run() {
  for (const host of HOSTS) {
    if (await test(host)) {
      console.log(`\nWorking connection found: ${host}`);
      return;
    }
  }
  console.log("All attempts failed. Please verify your password or if the project ID is correct.");
}

run();
