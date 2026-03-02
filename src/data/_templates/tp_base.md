---
author: Efahn Joe
pubDatetime: <%* tR += tp.date.now("YYYY-MM-DDTHH:mm:ss[Z]") %>
modDatetime:
title: <%* const raw = tp.file.title || ""; let rawTitle = raw.replace(/[-_]+/g, ' '); rawTitle = rawTitle.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').trim(); tR += rawTitle; %>
slug: <%* const title = tp.file.title || ""; if (/[\u4e00-\u9fff]/.test(title)) { tR += ""; } else { const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, ''); tR += slug; } %>
featured: true
draft: false
tags:
  - template
  - templater
timezone: <%* tR += Intl.DateTimeFormat().resolvedOptions().timeZone %>
ogImage: https://ifbvrtihxbemwddmpusw.supabase.co/storage/v1/object/public/cyber-history-images/og/og-v1.png
description:
---

## 引言



---

「正文」

---

## 數據來源與參考文獻

### 1. XXX
- XXX
- XXX

---