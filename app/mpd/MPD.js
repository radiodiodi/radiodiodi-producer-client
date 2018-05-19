import { MPDClient, MPDCommand } from 'mpdclient.js';

const host = process.env.MPD_HOST || 'localhost';
const port = process.env.MPD_PORT || 6600;

const client = new MPDClient(host, port);

const getStatus = async () => {
  const command = new MPDCommand('status');
  try {
    const resp = await client.execute(command);
    return resp;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  getStatus,
};
