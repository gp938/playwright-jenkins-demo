# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> has title
- Location: tests\login.spec.js:21:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - button "Google apps" [ref=e10] [cursor=pointer]
      - link "Sign in" [ref=e15] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e19]
  - search [ref=e27]:
    - generic [ref=e29]:
      - generic [ref=e31]:
        - button "Add files and tools" [ref=e36] [cursor=pointer]
        - combobox "Search" [active] [ref=e41]
        - generic [ref=e42]:
          - generic [ref=e43]:
            - button "Search by voice" [ref=e46] [cursor=pointer]
            - button "Search by image" [ref=e51] [cursor=pointer]
          - link "AI Mode" [ref=e54] [cursor=pointer]
      - generic [ref=e67]:
        - button "Google Search" [ref=e68] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e69] [cursor=pointer]
  - generic [ref=e72]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e73] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCCg
    - link "বাংলা" [ref=e74] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCCk
    - link "తెలుగు" [ref=e75] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCCo
    - link "मराठी" [ref=e76] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCCs
    - link "தமிழ்" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCCw
    - link "ગુજરાતી" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCC0
    - link "ಕನ್ನಡ" [ref=e79] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCC4
    - link "മലയാളം" [ref=e80] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCC8
    - link "ਪੰਜਾਬੀ" [ref=e81] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_s_Zg6jmmciYMsrpwxLnJi3Jcm0o%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiLidzX_vKWAxX8jOEIHcNUAQgQ2ZgBCDA
  - contentinfo [ref=e83]:
    - generic [ref=e84]: India
    - generic [ref=e85]:
      - generic [ref=e86]:
        - link "Advertising" [ref=e87] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e88] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e89] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e90]:
        - link "Privacy" [ref=e91] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e92] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e96] [cursor=pointer]
```