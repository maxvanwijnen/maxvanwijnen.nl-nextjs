/*import sendEmail from './sendEmail';*/
import sendEmail from '../../api/sendEmail';

export default function handler(req, res) {
    sendEmail(req, res);
}
