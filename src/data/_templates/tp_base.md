---
author: Efahn Joe
description:
draft: true
featured: false
modDatetime:
ogImage: https://ifbvrtihxbemwddmpusw.supabase.co/storage/v1/object/public/images/og/og-v1.webp
pubDatetime: '<%* tR += tp.date.now("YYYY-MM-DDTHH:mm:ss[Z]") %>'
readingTime: 0
slug: <%* const title = tp.file.title || ""; if (/[\u4e00-\u9fff]/.test(title)) { tR += ""; } else { const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, ''); tR += slug; } %>
sources:
  - org: Example Org
    title: Example Title
    url: https://example.com
tags:
  - template
  - templater
timezone: <%* tR += Intl.DateTimeFormat().resolvedOptions().timeZone %>
title: <%* const raw = tp.file.title || ""; let rawTitle = raw.replace(/[-_]+/g, ' '); rawTitle = rawTitle.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').trim(); tR += rawTitle; %>
---

## 引言

---

「正文」

---
