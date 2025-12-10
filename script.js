document.addEventListener('DOMContentLoaded', function() {
    // وظيفة لتحميل المزيد من الألعاب (بافتراض أن لديك المزيد من البطاقات مخفية)
    const loadMoreBtn = document.querySelector('.load-more-btn');
    // في الوضع الاحترافي الحقيقي، ستقوم هنا بتحميل البيانات من API
    // ولكن لغرض الموقع الثابت، يمكن أن تكون هذه مجرد وظيفة شكلية.

    loadMoreBtn.addEventListener('click', function() {
        alert('جارِ تحميل المزيد من الألعاب... (تحتاج إلى إضافة المزيد من محتوى HTML/JS هنا)');
        // يمكن هنا إخفاء الزر بعد الضغط عليه
        // loadMoreBtn.style.display = 'none';
    });

    // مثال لوظيفة شريط البحث (يمكن تطويرها لاحقاً)
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', function() {
        alert('وظيفة البحث غير مفعلة حالياً. الرجاء التمرير للأسفل لتصفح الألعاب.');
    });

    // تحسين تجربة المستخدم: إضافة تأثير بسيط عند التمرير
    // (لتحسين أداء الموقع، يفضل أن تكون التأثيرات خفيفة)
    // يمكنك إضافة مكتبة مثل AOS إذا أردت المزيد من الاحترافية
});
