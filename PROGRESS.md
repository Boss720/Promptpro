# Google AI Studio release

- Scope: add a Google AI Studio preset, key guidance, compatible streaming endpoint, and ship v0.1.1 Windows installers.
- Owner: Codex (direct implementation; shared provider files make delegation unnecessary).
- Verification: mocked request/stream regression tests, frontend build/lint, Rust tests/clippy, Tauri installer build, GUI launch.
- Live Google calls require a user API key and are not part of the automated checks.
- Status: implementation in progress.

## Verification complete

- `pnpm test`: 4 tests passed (Google endpoint/auth, chunked streaming, errors, existing providers, missing key).
- `pnpm build`: passed (existing large frontend chunk warning).
- `pnpm lint`: passed.
- `cargo test --manifest-path src-tauri/Cargo.toml`: passed; no Rust tests defined.
- `cargo clippy --manifest-path src-tauri/Cargo.toml --all-targets -- -D warnings`: passed.
- `pnpm desktop:build`: produced v0.1.1 NSIS EXE (1,854,054 bytes) and MSI (2,560,000 bytes).
- Launched release executable; visually confirmed Settings and Google AI Studio preset populate the endpoint/model, masked-key field, and key guidance.
- Live Gemini API calls and clean-machine install/upgrade lifecycle were not tested. Installers are unsigned.
- GitHub destination: Boss720/Promptpro. Release tag: v0.1.1.
