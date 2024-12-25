import React, { useState } from 'react';
import { Window, WindowContent, WindowHeader, Button } from 'react95';
import { Logo } from '@react95/icons';

const MissYou = () => {
    const [text, setText] = useState('Hey honey! Dont worry it wont be too cheesy. Merry Christmas! I hope youre having an amazing time with your family <3. Not only that, but today is actually also our 6 months! :000. Shocking right? Anywho, thank you for keeping my inner child alive, you deserve the absolute best in the world. So enjoy today to the absolute max! Say hi to everyone for me! mby next time ill be able to join you for xmas celebrations :p. In a big forest of green eyes, yours shine the most in my sight. you have a special place in my heart <3. MWAH!! (also you can delete the text and write stuff in here yourself)');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div style={{ marginTop: '50px' }}>
            <Window style={{ width: '600px', height: '400px' }}>
                <WindowHeader active={true}>
                    <Logo style={{ marginRight: '10px' }} />
                    <span>Miss You - Notepad</span>
                    <Button onClick={() => alert('Come back to this before giving kaya')}>X</Button>
                </WindowHeader>
                <WindowContent>
                    <textarea
                        value={text}
                        onChange={handleChange}
                        style={{
                            width: '100%',
                            height: '300px',
                            background: '#fff',
                            border: 'none',
                            fontFamily: 'courier',
                            fontSize: '14px',
                            padding: '10px',
                            resize: 'none',
                        }}
                    />
                </WindowContent>
            </Window>
        </div>
    );
};

export default MissYou;
