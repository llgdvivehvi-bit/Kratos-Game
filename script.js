document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');
    const algorithmSelect = document.getElementById('algorithm');
    const copyMessage = document.getElementById('copyMessage');

    // --- 1. خوارزميات التشفير والفك ---
    const algorithms = {
        // Base64 (تشفير قياسي للبيانات)
        base64: {
            encrypt: (text) => btoa(unescape(encodeURIComponent(text))),
            decrypt: (text) => {
                try {
                    return decodeURIComponent(escape(atob(text)));
                } catch (e) {
                    return "خطأ: النص المشفر غير صحيح (Base64).";
                }
            }
        },
        // Reverse (عكس النص - بسيط جداً)
        reverse: {
            encrypt: (text) => text.split('').reverse().join(''),
            decrypt: (text) => text.split('').reverse().join('')
        }
    };

    // --- 2. وظيفة التشفير العامة ---
    const processText = (mode) => {
        const input = inputText.value;
        const selectedAlgorithm = algorithmSelect.value;
        const algo = algorithms[selectedAlgorithm];

        if (!input) {
            outputText.value = "الرجاء إدخال نص للبدء...";
            return;
        }

        let result;
        if (mode === 'encrypt') {
            result = algo.encrypt(input);
        } else if (mode === 'decrypt') {
            result = algo.decrypt(input);
        }

        outputText.value = result;
    };

    // --- 3. ربط الأزرار بالوظيفة ---
    encryptBtn.addEventListener('click', () => {
        processText('encrypt');
    });

    decryptBtn.addEventListener('click', () => {
        processText('decrypt');
    });

    // --- 4. وظيفة النسخ ---
    copyBtn.addEventListener('click', () => {
        if (outputText.value) {
            navigator.clipboard.writeText(outputText.value).then(() => {
                copyMessage.textContent = "تم النسخ بنجاح!";
                setTimeout(() => {
                    copyMessage.textContent = '';
                }, 2000);
            }).catch(err => {
                copyMessage.textContent = "فشل النسخ.";
                console.error('Copy failed: ', err);
            });
        }
    });

});
