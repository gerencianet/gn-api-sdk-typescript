/* eslint-disable camelcase */
import { PathLike } from 'fs';

export interface ConfigInterface {
    client_id: string;
    client_secret: string;
    pix_cert: PathLike;
    sandbox: boolean;
    partner_token?: string;
}
