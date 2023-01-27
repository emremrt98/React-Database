import '../style/confirm.scss';
import { BsCheckCircleFill } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Confirm() {
    return (
        <div className="confirm">

            <div className='header'>
                <div>Ad Soyad</div>
                <div>Mesajınız</div>
                <div>Onay/Reddet</div>
            </div>

            <div className='data'>
                <div>Emre Mert</div>
                <div>İlk Mesaj</div>
                <div>
                    <span className='confirm__icon confirm__icon--checked'><BsCheckCircleFill /></span>
                    <span className='confirm__icon confirm__icon--delete'><TiDeleteOutline /></span>
                </div>
            </div>

        </div >
    );
}

