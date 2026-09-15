# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> get started link
- Location: tests\login.spec.js:28:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - region "Skip to main content":
    - link "Skip to main content" [ref=e3] [cursor=pointer]:
      - /url: "#__docusaurus_skipToContent_fallback"
  - navigation "Main" [ref=e4]
```