# Prompt Library v0.1.1

Adds Google AI Studio API key support to the Windows app.

- In Settings, select **Google AI Studio**, paste your Gemini API key, then click **Test connection**.
- Includes a default Gemini model, an editable model field, and a link to obtain a key.
- Uses Google's OpenAI-compatible streaming endpoint for the Enhancer.
- Existing provider presets and saved settings remain supported.

## Downloads

- **EXE setup**: per-user Windows x64 installer.
- **MSI**: Windows x64 installer for managed installations.

The installers are unsigned. WebView2 is required and the installer can download it if missing.

## Validation

Four automated provider regression tests passed, covering Google's endpoint/authentication, streaming, connection failures and existing providers. Frontend build and lint passed. Live Gemini authentication and quota behavior require your own API key and were not tested.

Rust tests (no tests defined) and strict Clippy passed. Both Windows installers built, and the release executable's Google AI Studio settings were visually checked. Clean-machine installation and upgrade were not tested.
