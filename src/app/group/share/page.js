import ImagePicker from '@/components/activities/image-picker';
import styles from './page.module.css';

export default function SharePage(){

    // 프론트앤드에서 서버로 데이터를 전송할 땐
    // form, fetch, ...

    return(
        <div>
            <header className={styles.header}>
                <h1>
                    우리동아리 <span className={styles.span}>활동 등록</span>
                </h1>
            </header>
            <main className={styles.main}>
                <form className={styles.form}>
                    <div className={styles.row}>
                        <p>
                            <label htmlFor='name'>이름</label>
                            <input type='text' id='name' name='name' required/>
                            {/* required => 무언가가 입력이 꼭 되어있어야 실행됨? */}
                        </p>
                        <p>
                            <label htmlFor='email'>이메일</label>
                            <input type='email' id='email' name='email' required/>
                        </p>
                    </div>

                    <p>
                            <label htmlFor='title'>제목</label>
                            <input type='text' id='title' name='title' required/>
                    </p>
                    <p>
                            <label htmlFor='summary'>요약</label>
                            <input type='text' id='summary' name='summary' required/>
                    </p>
                    {/* name : 서버가 전달받을 키 */}
                    <p>
                            <label htmlFor='content'>내용</label>
                            <textarea type='text' id='content' name='content' rows='10' required/>
                    </p>
                    <ImagePicker/>
                    <p className={styles.actions}>
                        <button type='submit'>등록</button>
                        {/* form태그 안의 내용을 전송함 */}
                    </p>
                </form>
            </main>
        </div>
    )
}