/**
 * AppLens - Mock Data Engine
 * Realistic, community-driven application intelligence data.
 * Designed to be directly replaceable by PHP/MySQL endpoints in the future.
 */

const APPLENS_DATA = {
  apps: [
    {
      id: "whatsapp",
      name: "WhatsApp Messenger",
      developer: "Meta Platforms, Inc.",
      category: "Communication",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="#25D366"/>
        <path d="M48.5 15.5C44.1 11.1 38.3 8.7 32 8.7C19.1 8.7 8.7 19.1 8.7 32C8.7 36.1 9.8 40.2 11.9 43.8L8.5 56L21 52.7C24.4 54.6 28.2 55.5 32 55.5C44.9 55.5 55.3 45.1 55.3 32.2C55.3 25.9 52.9 20 48.5 15.5ZM32 51.5C28.5 51.5 25.1 50.6 22.1 48.8L21.4 48.4L14 50.3L16 43.1L15.5 42.4C13.5 39.2 12.5 35.6 12.5 32C12.5 21.2 21.2 12.5 32 12.5C37.2 12.5 42.1 14.5 45.8 18.2C49.5 21.9 51.5 26.8 51.5 32C51.5 42.8 42.8 51.5 32 51.5ZM42.7 37.8C42.1 37.5 39.2 36.1 38.7 35.9C38.2 35.7 37.8 35.6 37.4 36.2C37 36.8 35.9 38.2 35.5 38.6C35.2 39 34.8 39.1 34.2 38.8C33.6 38.5 31.7 37.9 29.5 35.9C27.7 34.3 26.6 32.4 26.2 31.8C25.9 31.2 26.2 30.9 26.5 30.6C26.7 30.3 27.1 29.9 27.4 29.5C27.7 29.1 27.8 28.8 28 28.4C28.2 28 28.1 27.6 27.9 27.3C27.8 27 26.7 24.3 26.2 23.1C25.8 22 25.3 22.1 25 22.1C24.7 22.1 24.3 22.1 23.9 22.1C23.5 22.1 22.9 22.2 22.4 22.8C21.9 23.3 20.6 24.6 20.6 27.1C20.6 29.6 22.4 32.1 22.7 32.4C23 32.8 26.3 37.8 31.2 39.9C32.4 40.4 33.3 40.7 34 41C35.3 41.4 36.4 41.3 37.3 41.2C38.3 41 40.4 39.9 40.8 38.7C41.3 37.5 41.3 36.5 41.1 36.2C41 36 40.6 35.9 42.7 37.8Z" fill="white"/>
      </svg>`,
      packageName: "com.whatsapp",
      rating: 4.2,
      totalRatings: 18450,
      currentVersion: "2.24.20.12",
      releaseDate: "September 12, 2026",
      shortDescription: "Simple, reliable private messaging and calls with end-to-end encryption.",
      fullDescription: "WhatsApp from Meta is a free messaging and video calling app used by over 2 billion people in more than 180 countries. It's simple, reliable, and private, so you can easily keep in touch with your friends and family across mobile and desktop devices without SMS fees.",
      size: "48.2 MB",
      minAndroid: "Android 5.0+",
      minIos: "iOS 12.0+",
      updateVerdict: "safe", // safe | caution | warning
      updateSummary: "Safe to update for most users. Minor battery report on Samsung One UI 6.1, resolved in hotfix.",
      
      // Before You Update comparison
      updateComparison: {
        fromVersion: "2.24.18.8",
        toVersion: "2.24.20.12",
        releaseDate: "September 12, 2026",
        permissionChanges: [
          {
            type: "modified",
            name: "Nearby Wi-Fi Devices",
            detail: "Now explicitly requested only during local chat transfer, no longer holds background discovery."
          },
          {
            type: "unchanged",
            name: "Camera & Microphone",
            detail: "No new permissions added. Scopes remain strictly runtime-gated."
          }
        ],
        newFeatures: [
          "HD video call screen sharing with integrated device audio.",
          "Passkey support for passwordless account authentication.",
          "Enhanced privacy controls for group call links."
        ],
        fixes: [
          "Fixed camera stutter when switching to ultra-wide lens on Pixel 8/9.",
          "Resolved notification vibration delay in silent mode on iOS 18.",
          "Fixed crash when backing up encrypted chats over 15GB."
        ],
        knownIssues: [
          {
            severity: "low",
            device: "Samsung Galaxy S23 / S24 (One UI 6.1)",
            description: "Occasional 3-5% background battery draw if voice message transcription is active in background."
          }
        ],
        communityVerdictText: "91% of community testers report smooth performance with improved memory handling."
      },

      // Permissions breakdown with human translations
      permissions: [
        {
          id: "camera",
          name: "Camera",
          technicalName: "android.permission.CAMERA",
          sensitivity: "high",
          purpose: "Capturing photos, recording videos, and making video calls.",
          humanExplanation: "Only active when you take a photo within the app or are in an active video call. It does not record in the background.",
          backgroundAccess: false,
          required: false,
          alternative: "You can deny this and upload pre-taken photos from your gallery."
        },
        {
          id: "microphone",
          name: "Microphone",
          technicalName: "android.permission.RECORD_AUDIO",
          sensitivity: "high",
          purpose: "Voice calls, video call audio, and recording voice notes.",
          humanExplanation: "AppLens verified: Only activates when you hold the record button or speak during calls. OS indicator clearly shows green dot.",
          backgroundAccess: false,
          required: false,
          alternative: "Text messaging works entirely without microphone access."
        },
        {
          id: "contacts",
          name: "Contacts",
          technicalName: "android.permission.READ_CONTACTS",
          sensitivity: "medium",
          purpose: "Syncing your phonebook to show which of your contacts are on WhatsApp.",
          humanExplanation: "Transmits contact phone numbers to Meta servers using one-way cryptographic hashing to discover friends.",
          backgroundAccess: true,
          required: false,
          alternative: "You can start individual chats using phone number links (wa.me) without sharing contacts."
        },
        {
          id: "location",
          name: "Location",
          technicalName: "android.permission.ACCESS_FINE_LOCATION",
          sensitivity: "medium",
          purpose: "Sharing live or static location with selected chats.",
          humanExplanation: "Only requested when you actively tap 'Share Location'. Live location runs in background only for the timer you choose.",
          backgroundAccess: true,
          required: false,
          alternative: "You can send text addresses or pinned map URLs instead."
        },
        {
          id: "notifications",
          name: "Notifications",
          technicalName: "android.permission.POST_NOTIFICATIONS",
          sensitivity: "low",
          purpose: "Delivering incoming messages and call alerts in real time.",
          humanExplanation: "Standard notification channel. Does not leak message contents when preview toggle is disabled.",
          backgroundAccess: true,
          required: true,
          alternative: "If denied, you will only see messages when opening the app."
        }
      ],

      // Chronological Version History
      versionHistory: [
        {
          version: "2.24.20.12",
          date: "Sep 12, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Audio sharing during screen share, improved passkey auth flow, and camera stability hotfixes.",
          changes: [
            "Passkey support rolled out globally",
            "Screen share audio routing improvement",
            "Fixed backup sync edge cases"
          ]
        },
        {
          version: "2.24.18.8",
          date: "Aug 28, 2026",
          isCurrent: false,
          badge: "Stable",
          summary: "Voice message automated transcription in 5 additional languages, minor UI refinements.",
          changes: [
            "Voice note transcription (Spanish, Portuguese, Hindi)",
            "Updated bottom navigation bar styling"
          ]
        },
        {
          version: "2.24.15.4",
          date: "Aug 02, 2026",
          isCurrent: false,
          badge: "Previous",
          summary: "Community channel admin pinning and higher video upload resolution cap.",
          changes: [
            "HD video upload default toggle in Storage settings",
            "Fixed notification badge clearing on iOS"
          ]
        },
        {
          version: "2.24.10.1",
          date: "Jul 14, 2026",
          isCurrent: false,
          badge: "Archived",
          summary: "Security patch for media parsing and reduced idle memory consumption.",
          changes: [
            "Memory footprint reduced by 14% on low-RAM devices",
            "Patched libwebp parsing vulnerability"
          ]
        }
      ],

      // Community Reports
      communityReports: [
        {
          id: "rep-wa-101",
          user: "Alex K.",
          device: "Samsung Galaxy S24 Ultra",
          osVersion: "Android 14 (One UI 6.1)",
          appVersion: "2.24.20.12",
          date: "2 days ago",
          issueType: "Battery",
          rating: 4,
          verified: true,
          title: "Slight battery drain when background voice transcription is active",
          content: "Since the 2.24.20 update, I noticed a 4% extra hourly battery drop if friends send long voice notes while my screen is locked. Once I turned off 'Auto-transcribe incoming audio' in Chat settings, battery went right back to normal. Otherwise super stable.",
          upvotes: 42,
          userUpvoted: false
        },
        {
          id: "rep-wa-102",
          user: "Elena Rovas",
          device: "iPhone 15 Pro",
          osVersion: "iOS 18.0",
          appVersion: "2.24.20.12",
          date: "4 days ago",
          issueType: "Performance",
          rating: 5,
          verified: true,
          title: "Camera switching is buttery smooth now",
          content: "Previous build had a jarring 1-second freeze when switching between the 1x and 0.5x cameras during in-app capture. This build completely eradicated that lag. Great update for iPhone users.",
          upvotes: 68,
          userUpvoted: true
        },
        {
          id: "rep-wa-103",
          user: "Marcus D.",
          device: "Google Pixel 8 Pro",
          osVersion: "Android 15 Beta",
          appVersion: "2.24.18.8",
          date: "2 weeks ago",
          issueType: "Bug",
          rating: 3,
          verified: true,
          title: "Notification sounds occasionally silent in Do Not Disturb exceptions",
          content: "Starred contacts bypass DND for calls, but text alerts stay muted even when allowed in Android system settings. Waiting for next patch.",
          upvotes: 19,
          userUpvoted: false
        }
      ]
    },

    {
      id: "signal",
      name: "Signal Private Messenger",
      developer: "Signal Foundation",
      category: "Privacy & Messaging",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="#3A76F0"/>
        <path d="M32 12C20.954 12 12 20.954 12 32C12 35.84 13.08 39.43 14.95 42.48L13.1 49.38C12.87 50.24 13.68 51.05 14.54 50.82L21.44 48.97C24.49 50.84 28.08 51.92 31.92 51.92C42.97 51.92 51.92 42.97 51.92 31.92C51.92 20.87 42.97 12 32 12ZM32 47.92C28.58 47.92 25.38 46.96 22.65 45.31L22.02 44.93L16.48 46.41L17.96 40.87L17.58 40.24C15.93 37.51 14.97 34.31 14.97 30.89C14.97 21.5 22.61 13.86 32 13.86C41.39 13.86 49.03 21.5 49.03 30.89C49.03 40.28 41.39 47.92 32 47.92Z" fill="white"/>
        <circle cx="32" cy="31" r="9" fill="white" fill-opacity="0.25"/>
      </svg>`,
      packageName: "org.thoughtcrime.securesms",
      rating: 4.8,
      totalRatings: 11200,
      currentVersion: "7.14.3",
      releaseDate: "September 08, 2026",
      shortDescription: "State-of-the-art end-to-end encryption with zero ad tracking and zero telemetry.",
      fullDescription: "Signal is a messaging app with privacy at its core. Open-source, funded by grants and donations, with no advertisements, affiliate marketers, or tracking. Messages, calls, group chats, and media are completely encrypted.",
      size: "42.5 MB",
      minAndroid: "Android 5.0+",
      minIos: "iOS 13.0+",
      updateVerdict: "safe",
      updateSummary: "Excellent community consensus. Minimal telemetry changes, pristine privacy record.",
      
      updateComparison: {
        fromVersion: "7.12.1",
        toVersion: "7.14.3",
        releaseDate: "September 08, 2026",
        permissionChanges: [
          {
            type: "unchanged",
            name: "Zero Permission Escalation",
            detail: "Signal continues to request strictly zero unnecessary background permissions."
          }
        ],
        newFeatures: [
          "Private phone number usernames (share username instead of mobile number).",
          "Optional disappearing media after single view with screenshot blocker.",
          "Enhanced backup export speed for large image libraries."
        ],
        fixes: [
          "Eliminated Bluetooth audio reconnect delay when receiving incoming VoIP call.",
          "Optimized local SQLCipher database index for quicker search results."
        ],
        knownIssues: [],
        communityVerdictText: "98% of users give thumbs up. Zero battery anomalies reported."
      },

      permissions: [
        {
          id: "contacts",
          name: "Contacts",
          technicalName: "android.permission.READ_CONTACTS",
          sensitivity: "low",
          purpose: "Finding friends who use Signal.",
          humanExplanation: "Signal uses Private Contact Discovery. Phone numbers are hashed and processed via secure hardware enclaves; Signal's servers never learn your contacts.",
          backgroundAccess: false,
          required: false,
          alternative: "You can use Signal solely by manual phone numbers or usernames."
        },
        {
          id: "camera",
          name: "Camera",
          technicalName: "android.permission.CAMERA",
          sensitivity: "high",
          purpose: "Taking encrypted photos and video calls.",
          humanExplanation: "Used only while app is open and camera mode is active.",
          backgroundAccess: false,
          required: false
        }
      ],

      versionHistory: [
        {
          version: "7.14.3",
          date: "Sep 08, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Encrypted usernames rollout and backup performance improvements.",
          changes: ["Username sharing without exposing phone numbers", "VoIP latency reduction"]
        },
        {
          version: "7.12.1",
          date: "Aug 15, 2026",
          isCurrent: false,
          badge: "Stable",
          summary: "High-definition photo sending toggle and voice note wave preview.",
          changes: ["HD media send option", "Audio waveforms in chat bubbles"]
        }
      ],

      communityReports: [
        {
          id: "rep-sig-201",
          user: "Julian V.",
          device: "Pixel 7",
          osVersion: "GrapheneOS (Android 14)",
          appVersion: "7.14.3",
          date: "3 days ago",
          issueType: "Performance",
          rating: 5,
          verified: true,
          title: "Flawless performance on sandboxed environments",
          content: "Runs without Google Play Services using built-in websockets. Background battery drain is undetectable under 0.8% a day.",
          upvotes: 55,
          userUpvoted: false
        }
      ]
    },

    {
      id: "spotify",
      name: "Spotify: Music and Podcasts",
      developer: "Spotify AB",
      category: "Music & Audio",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="#1ED760"/>
        <path d="M43.8 45.2C43.3 46 42.3 46.2 41.5 45.7C35.4 42 27.7 41.2 18.2 43.4C17.3 43.6 16.5 43 16.3 42.1C16.1 41.2 16.7 40.4 17.6 40.2C28 37.8 36.5 38.7 43.3 42.9C44.1 43.3 44.3 44.4 43.8 45.2ZM47.2 38C46.6 39 45.3 39.3 44.3 38.7C38 34.8 28.3 33.7 19.5 36.4C18.4 36.7 17.2 36.1 16.9 35C16.6 33.9 17.2 32.7 18.3 32.4C28.2 29.4 39 30.7 46.1 35.1C47.1 35.7 47.4 37 47.2 38ZM47.6 30.5C39.9 25.9 27.2 25.5 19.8 27.7C18.6 28.1 17.3 27.4 16.9 26.2C16.5 25 17.2 23.7 18.4 23.3C27 20.7 41 21.2 49.8 26.4C50.9 27.1 51.2 28.5 50.6 29.6C49.9 30.7 48.6 31 47.6 30.5Z" fill="#121212"/>
      </svg>`,
      packageName: "com.spotify.music",
      rating: 3.9,
      totalRatings: 29800,
      currentVersion: "8.9.72",
      releaseDate: "September 14, 2026",
      shortDescription: "Millions of songs, curated playlists, and podcasts with offline playback.",
      fullDescription: "With Spotify, you have access to a world of free music, curated playlists, artists, and podcasts you love. Discover new music, podcasts, top songs, or listen to your favorite artists and albums.",
      size: "62.8 MB",
      minAndroid: "Android 5.0+",
      minIos: "iOS 14.0+",
      updateVerdict: "caution",
      updateSummary: "Known playback pause bug when connecting to specific car Bluetooth systems in version 8.9.72.",

      updateComparison: {
        fromVersion: "8.9.68",
        toVersion: "8.9.72",
        releaseDate: "September 14, 2026",
        permissionChanges: [
          {
            type: "modified",
            name: "Bluetooth Connect",
            detail: "Adjusted to request background scanning for Spotify Connect speaker handoff."
          }
        ],
        newFeatures: [
          "Lossless audio streaming toggle (rolling out gradually to Premium subscribers).",
          "Mini-player gesture for instant queue reordering."
        ],
        fixes: [
          "Fixed offline downloaded playlist artwork disappearing after cache purge."
        ],
        knownIssues: [
          {
            severity: "medium",
            device: "Android Auto / Car Bluetooth (Multi-vendor)",
            description: "Some users report audio pausing 10 seconds after ignition connect until phone screen is unlocked."
          }
        ],
        communityVerdictText: "68% recommend updating. Users reliant on daily Bluetooth car audio may prefer waiting for 8.9.74."
      },

      permissions: [
        {
          id: "storage",
          name: "Storage & Files",
          technicalName: "android.permission.READ_MEDIA_AUDIO",
          sensitivity: "medium",
          purpose: "Storing downloaded offline songs and caching album art.",
          humanExplanation: "Allows Spotify to save DRM-encrypted music tracks onto your internal memory or SD card.",
          backgroundAccess: true,
          required: true
        },
        {
          id: "nearby",
          name: "Nearby Devices (Bluetooth)",
          technicalName: "android.permission.BLUETOOTH_CONNECT",
          sensitivity: "low",
          purpose: "Detecting wireless speakers, headphones, and Spotify Connect hubs.",
          humanExplanation: "Discovers your living room speakers or smart TV so you can transfer playback.",
          backgroundAccess: true,
          required: false
        }
      ],

      versionHistory: [
        {
          version: "8.9.72",
          date: "Sep 14, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Lossless rollout readiness and mini-player queue gestures.",
          changes: ["Lossless tier infrastructure", "Bluetooth discovery handoff update"]
        },
        {
          version: "8.9.68",
          date: "Aug 29, 2026",
          isCurrent: false,
          badge: "Stable",
          summary: "Podcast video chapter scrub enhancement.",
          changes: ["Video podcast chapters", "Lyric sync calibration"]
        }
      ],

      communityReports: [
        {
          id: "rep-spo-301",
          user: "David T.",
          device: "OnePlus 12",
          osVersion: "OxygenOS 14",
          appVersion: "8.9.72",
          date: "1 day ago",
          issueType: "Bug",
          rating: 3,
          verified: true,
          title: "Bluetooth auto-pause bug confirmed in car",
          content: "Can confirm the known issue: connects to Honda Civic Bluetooth, plays 12 seconds, then pauses. Once I tap play on the phone it stays playing. A bit annoying while driving.",
          upvotes: 38,
          userUpvoted: false
        }
      ]
    },

    {
      id: "instagram",
      name: "Instagram",
      developer: "Meta Platforms, Inc.",
      category: "Social & Photography",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="url(#ig-grad)"/>
        <defs>
          <linearGradient id="ig-grad" x1="8" y1="56" x2="56" y2="8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFDD55"/>
            <stop offset="0.3" stop-color="#FF5D3B"/>
            <stop offset="0.7" stop-color="#D62976"/>
            <stop offset="1" stop-color="#4F5BD5"/>
          </linearGradient>
        </defs>
        <rect x="16" y="16" width="32" height="32" rx="9" stroke="white" stroke-width="3.5" fill="none"/>
        <circle cx="32" cy="32" r="7.5" stroke="white" stroke-width="3.5" fill="none"/>
        <circle cx="41.5" cy="22.5" r="2" fill="white"/>
      </svg>`,
      packageName: "com.instagram.android",
      rating: 3.8,
      totalRatings: 34200,
      currentVersion: "348.0.0.38",
      releaseDate: "September 10, 2026",
      shortDescription: "Photo & video sharing, Reels, direct messaging, and Stories.",
      fullDescription: "Bringing you closer to the people and things you love. Connect with friends, share what you’re up to, or see what's new from others all over the world.",
      size: "74.5 MB",
      minAndroid: "Android 7.0+",
      minIos: "iOS 14.0+",
      updateVerdict: "safe",
      updateSummary: "Standard performance release. No major anomalies reported by the community.",

      updateComparison: {
        fromVersion: "346.0.0.30",
        toVersion: "348.0.0.38",
        releaseDate: "September 10, 2026",
        permissionChanges: [
          {
            type: "unchanged",
            name: "App Tracking / Ad Identifiers",
            detail: "Meta advertising tracking frameworks remain unchanged."
          }
        ],
        newFeatures: [
          "Reels audio remix split channel controls.",
          "Close Friends list scheduling for Stories."
        ],
        fixes: [
          "Resolved video export glitch when applying dual filters on iOS."
        ],
        knownIssues: [],
        communityVerdictText: "84% report normal daily operation across both Android and iOS."
      },

      permissions: [
        {
          id: "camera",
          name: "Camera & Mic",
          technicalName: "android.permission.CAMERA",
          sensitivity: "high",
          purpose: "Stories, live broadcasts, and direct video messaging.",
          humanExplanation: "Needed whenever you post a story or open the in-app camera viewfinder.",
          backgroundAccess: false,
          required: false
        },
        {
          id: "location",
          name: "Precise Location",
          technicalName: "android.permission.ACCESS_FINE_LOCATION",
          sensitivity: "high",
          purpose: "Geotagging posts and local advertisement recommendation.",
          humanExplanation: "Shares your exact GPS coordinate to place city/business stickers and tailor regional ad targeting.",
          backgroundAccess: false,
          required: false,
          alternative: "You can type location names manually without granting GPS rights."
        }
      ],

      versionHistory: [
        {
          version: "348.0.0.38",
          date: "Sep 10, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Reels remix expansion and Story timing optimizations.",
          changes: ["Audio remixing updates", "General stability"]
        }
      ],

      communityReports: [
        {
          id: "rep-ig-401",
          user: "Chloe M.",
          device: "iPhone 14",
          osVersion: "iOS 17.6",
          appVersion: "348.0.0.38",
          date: "3 days ago",
          issueType: "Performance",
          rating: 4,
          verified: true,
          title: "App feels snappy, DM photo loading is faster",
          content: "Past versions took 2-3 seconds to render full-resolution photos in DMs. This build caches them instantly.",
          upvotes: 21,
          userUpvoted: false
        }
      ]
    },

    {
      id: "telegram",
      name: "Telegram",
      developer: "Telegram FZ-LLC",
      category: "Communication",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="#24A1DE"/>
        <path d="M48.5 16.5L13.8 29.8C11.4 30.8 11.4 32.1 13.4 32.7L22.3 35.5L42.9 22.5C43.9 21.9 44.8 22.3 44 23L27.3 38.1L26.7 47.4C27.6 47.4 28 47 28.5 46.5L32.8 42.3L41.7 48.9C43.3 49.8 44.5 49.3 44.9 47.4L50.7 20C51.3 17.5 49.7 16.3 48.5 16.5Z" fill="white"/>
      </svg>`,
      packageName: "org.telegram.messenger",
      rating: 4.4,
      totalRatings: 22100,
      currentVersion: "10.14.0",
      releaseDate: "September 05, 2026",
      shortDescription: "Fast, cloud-synced instant messaging with rich channel media support.",
      fullDescription: "Pure instant messaging — simple, fast, secure, and synced across all your devices. Over 900 million active users. Telegram sends messages faster than any other application.",
      size: "54.0 MB",
      minAndroid: "Android 6.0+",
      minIos: "iOS 12.0+",
      updateVerdict: "safe",
      updateSummary: "Highly stable release with rich mini-app API upgrades. Smooth feedback.",

      updateComparison: {
        fromVersion: "10.12.0",
        toVersion: "10.14.0",
        releaseDate: "September 05, 2026",
        permissionChanges: [
          {
            type: "unchanged",
            name: "Standard Permissions",
            detail: "No new permissions requested."
          }
        ],
        newFeatures: [
          "Mini-app full screen and landscape modes.",
          "Star gifting and creator monetization support.",
          "Enhanced cache clearing controls per chat."
        ],
        fixes: [
          "Fixed occasional sticker drawer stutter on 120Hz displays."
        ],
        knownIssues: [],
        communityVerdictText: "94% positive community reception. Very low reported crash frequency."
      },

      permissions: [
        {
          id: "storage",
          name: "Files & Media",
          technicalName: "android.permission.READ_EXTERNAL_STORAGE",
          sensitivity: "medium",
          purpose: "Downloading documents, music, and shared files up to 2GB.",
          humanExplanation: "Allows saving documents and photos directly to your local file system.",
          backgroundAccess: true,
          required: false
        }
      ],

      versionHistory: [
        {
          version: "10.14.0",
          date: "Sep 05, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Mini-app full screen view and creator Stars support.",
          changes: ["Mini-apps landscape support", "120Hz drawer smoothness"]
        }
      ],

      communityReports: [
        {
          id: "rep-tg-501",
          user: "Sergei P.",
          device: "Nothing Phone (2)",
          osVersion: "Nothing OS 2.6",
          appVersion: "10.14.0",
          date: "5 days ago",
          issueType: "Performance",
          rating: 5,
          verified: true,
          title: "120Hz scrolling fix is immediately noticeable",
          content: "Previous build dropped frames when rapidly scrolling through heavy channels with thousands of photos. 10.14 is rock solid 120fps.",
          upvotes: 49,
          userUpvoted: true
        }
      ]
    },

    {
      id: "youtube",
      name: "YouTube",
      developer: "Google LLC",
      category: "Video & Streaming",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="#FF0000"/>
        <path d="M47.7 21.8C47.1 19.6 45.4 17.9 43.2 17.3C39.2 16.2 32 16.2 32 16.2C32 16.2 24.8 16.2 20.8 17.3C18.6 17.9 16.9 19.6 16.3 21.8C15.2 25.8 15.2 34.2 15.2 34.2C15.2 34.2 15.2 42.6 16.3 46.6C16.9 48.8 18.6 50.5 20.8 51.1C24.8 52.2 32 52.2 32 52.2C32 52.2 39.2 52.2 43.2 51.1C45.4 50.5 47.1 48.8 47.7 46.6C48.8 42.6 48.8 34.2 48.8 34.2C48.8 34.2 48.8 25.8 47.7 21.8ZM28.6 41.8V26.6L41.9 34.2L28.6 41.8Z" fill="white"/>
      </svg>`,
      packageName: "com.google.android.youtube",
      rating: 4.1,
      totalRatings: 41000,
      currentVersion: "19.36.35",
      releaseDate: "September 11, 2026",
      shortDescription: "Watch, stream, and discover what the world is watching in music, gaming, and news.",
      fullDescription: "Get the official YouTube app on Android phones and tablets. See what the world is watching -- from the hottest music videos to what’s popular in gaming, fashion, beauty, news, learning and more.",
      size: "52.4 MB",
      minAndroid: "Android 8.0+",
      minIos: "iOS 14.0+",
      updateVerdict: "safe",
      updateSummary: "Stable video decoding pipeline update. PiP mode improvements.",

      updateComparison: {
        fromVersion: "19.34.30",
        toVersion: "19.36.35",
        releaseDate: "September 11, 2026",
        permissionChanges: [
          {
            type: "unchanged",
            name: "Notifications & Background Play",
            detail: "No new permissions."
          }
        ],
        newFeatures: [
          "Sleep timer now accessible directly from playback settings gear.",
          "Fine scrub preview thumbnail resolution doubled."
        ],
        fixes: [
          "Fixed Picture-in-Picture window freeze when receiving incoming notification."
        ],
        knownIssues: [],
        communityVerdictText: "89% of community reviewers confirm battery and playback stability."
      },

      permissions: [
        {
          id: "notifications",
          name: "Notifications",
          technicalName: "android.permission.POST_NOTIFICATIONS",
          sensitivity: "low",
          purpose: "Subscribed channel alerts and live stream broadcasts.",
          humanExplanation: "Pushes notifications when creators you subscribe to upload videos.",
          backgroundAccess: true,
          required: false
        }
      ],

      versionHistory: [
        {
          version: "19.36.35",
          date: "Sep 11, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Native sleep timer and Picture-in-Picture bugfixes.",
          changes: ["Sleep timer toggle", "PiP stability"]
        }
      ],

      communityReports: [
        {
          id: "rep-yt-601",
          user: "Tom H.",
          device: "Pixel 9 Pro",
          osVersion: "Android 15",
          appVersion: "19.36.35",
          date: "2 days ago",
          issueType: "Performance",
          rating: 5,
          verified: true,
          title: "Picture-in-picture doesn't glitch out anymore",
          content: "On 19.34, swiping up to go home while playing a 4K video occasionally resulted in a black box in PiP. Version 19.36 fixes it cleanly.",
          upvotes: 31,
          userUpvoted: false
        }
      ]
    },

    {
      id: "reddit",
      name: "Reddit",
      developer: "reddit Inc.",
      category: "News & Communities",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="#FF4500"/>
        <circle cx="32" cy="35" r="14" fill="white"/>
        <ellipse cx="26" cy="34" rx="2.5" ry="3.5" fill="#FF4500"/>
        <ellipse cx="38" cy="34" rx="2.5" ry="3.5" fill="#FF4500"/>
        <path d="M27 40C28.5 42 35.5 42 37 40" stroke="#FF4500" stroke-width="2" stroke-linecap="round"/>
        <circle cx="44" cy="22" r="3.5" fill="white"/>
        <path d="M32 23V16L41 18" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      packageName: "com.reddit.frontpage",
      rating: 3.5,
      totalRatings: 15400,
      currentVersion: "2024.36.0",
      releaseDate: "September 09, 2026",
      shortDescription: "Dive into your favorite topics across thousands of passionate communities.",
      fullDescription: "Reddit is where people come together to have the most authentic and interesting conversations on the internet. Whether you’re into breaking news, sports, TV fan theories, or an endless stream of cute animals.",
      size: "68.1 MB",
      minAndroid: "Android 8.0+",
      minIos: "iOS 15.0+",
      updateVerdict: "warning",
      updateSummary: "Significant community reports of overheating and battery drain during prolonged feed scrolling on Android.",

      updateComparison: {
        fromVersion: "2024.34.0",
        toVersion: "2024.36.0",
        releaseDate: "September 09, 2026",
        permissionChanges: [
          {
            type: "unchanged",
            name: "Standard Permissions",
            detail: "No new permissions."
          }
        ],
        newFeatures: [
          "Community chat channel pins.",
          "Improved comment thread folding animations."
        ],
        fixes: [
          "Fixed unread chat badge counter mismatch."
        ],
        knownIssues: [
          {
            severity: "high",
            device: "Snapdragon 8 Gen 2 / Gen 3 Devices",
            description: "App keeps GPU clock pinned at high frequency while autoplaying videos in main feed, causing device to warm up."
          }
        ],
        communityVerdictText: "Only 48% recommend updating. Consider keeping version 2024.34 until thermal hotfix drops."
      },

      permissions: [
        {
          id: "notifications",
          name: "Notifications",
          technicalName: "android.permission.POST_NOTIFICATIONS",
          sensitivity: "low",
          purpose: "Comment replies, upvote milestones, and subreddit trending highlights.",
          humanExplanation: "Sends notifications for inbox replies and community highlights.",
          backgroundAccess: true,
          required: false
        }
      ],

      versionHistory: [
        {
          version: "2024.36.0",
          date: "Sep 09, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Comment collapsing animations and chat pinning.",
          changes: ["Chat pins", "Comment animations"]
        }
      ],

      communityReports: [
        {
          id: "rep-red-701",
          user: "Nathan B.",
          device: "Galaxy S23+",
          osVersion: "Android 14",
          appVersion: "2024.36.0",
          date: "3 days ago",
          issueType: "Heating",
          rating: 2,
          verified: true,
          title: "Phone gets warm after 15 minutes of scrolling",
          content: "Never had thermal issues before, but version 2024.36 gets my S23 visibly warm to the touch around the camera bump. Battery dropped 18% in 35 minutes. Workaround is turning off Autoplay in settings.",
          upvotes: 74,
          userUpvoted: true
        }
      ]
    },

    {
      id: "discord",
      name: "Discord: Talk, Chat & Hang Out",
      developer: "Discord Inc.",
      category: "Communication",
      icon: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="app-icon-svg">
        <rect width="64" height="64" rx="16" fill="#5865F2"/>
        <path d="M44.5 19.5C41.7 18.2 38.6 17.3 35.5 16.8C35.1 17.5 34.6 18.5 34.2 19.4C30.8 18.9 27.5 18.9 24.2 19.4C23.8 18.5 23.3 17.5 22.9 16.8C19.7 17.3 16.7 18.2 13.9 19.5C8.3 27.9 6.8 36.1 7.6 44.2C11.3 46.9 14.9 48.6 18.4 49.7C19.3 48.5 20.1 47.2 20.7 45.8C19.4 45.3 18.2 44.7 17.1 43.9C17.4 43.7 17.7 43.4 18 43.2C25 46.4 33.6 46.4 40.5 43.2C40.8 43.4 41.1 43.7 41.4 43.9C40.3 44.7 39.1 45.3 37.8 45.8C38.5 47.2 39.3 48.5 40.1 49.7C43.6 48.6 47.2 46.9 50.9 44.2C51.8 34.7 49.3 26.6 44.5 19.5ZM23.3 39.8C21.2 39.8 19.5 37.9 19.5 35.5C19.5 33.1 21.2 31.2 23.3 31.2C25.4 31.2 27.2 33.1 27.1 35.5C27.1 37.9 25.4 39.8 23.3 39.8ZM35.1 39.8C33 39.8 31.3 37.9 31.3 35.5C31.3 33.1 33 31.2 35.1 31.2C37.2 31.2 39 33.1 38.9 35.5C38.9 37.9 37.2 39.8 35.1 39.8Z" fill="white"/>
      </svg>`,
      packageName: "com.discord",
      rating: 4.0,
      totalRatings: 19500,
      currentVersion: "244.15",
      releaseDate: "September 07, 2026",
      shortDescription: "Group chat for friends and communities with voice, video, and screen sharing.",
      fullDescription: "Discord is where you can make a home for your communities and friends. Where you can stay close and have fun over text, voice, and video chat.",
      size: "71.2 MB",
      minAndroid: "Android 7.0+",
      minIos: "iOS 14.0+",
      updateVerdict: "safe",
      updateSummary: "Refined channel navigation, reliable voice reconnects.",

      updateComparison: {
        fromVersion: "242.10",
        toVersion: "244.15",
        releaseDate: "September 07, 2026",
        permissionChanges: [
          {
            type: "unchanged",
            name: "Microphone & Storage",
            detail: "Permissions unmodified."
          }
        ],
        newFeatures: [
          "Voice channel soundboard favorites quick bar.",
          "Low-latency audio bitrate selector for spotty cellular connections."
        ],
        fixes: [
          "Resolved voice channel auto-disconnect on Wi-Fi to 5G network handover."
        ],
        knownIssues: [],
        communityVerdictText: "90% of community reports indicate high voice stability."
      },

      permissions: [
        {
          id: "mic",
          name: "Microphone",
          technicalName: "android.permission.RECORD_AUDIO",
          sensitivity: "high",
          purpose: "Transmitting your voice in stage channels, voice rooms, and direct calls.",
          humanExplanation: "Only streams audio while actively joined to a voice room. Mute state is reflected by OS mic indicator.",
          backgroundAccess: true,
          required: false
        }
      ],

      versionHistory: [
        {
          version: "244.15",
          date: "Sep 07, 2026",
          isCurrent: true,
          badge: "Current Release",
          summary: "Voice reconnection reliability on cellular switches.",
          changes: ["Cellular handover fix", "Soundboard favorites"]
        }
      ],

      communityReports: [
        {
          id: "rep-dis-801",
          user: "Liam K.",
          device: "Motorola Edge 40",
          osVersion: "Android 14",
          appVersion: "244.15",
          date: "4 days ago",
          issueType: "Performance",
          rating: 4,
          verified: true,
          title: "Voice call connection is significantly more resilient",
          content: "Walking out of the house used to disconnect my call during Wi-Fi to 5G handover. With 244.15 it drops for half a second and immediately recovers.",
          upvotes: 27,
          userUpvoted: false
        }
      ]
    }
  ],

  // System admin mock store
  adminStats: {
    pendingReports: 7,
    flaggedContent: 2,
    totalApplications: 8,
    activeUsers: 4820,
    dailyVerifications: 142
  },

  // Categories list
  categories: [
    "All",
    "Communication",
    "Privacy & Messaging",
    "Music & Audio",
    "Social & Photography",
    "Video & Streaming",
    "News & Communities"
  ],

  // Issue types for report submission
  issueTypes: [
    { id: "Bug", label: "Bug / Glitch", desc: "Unexpected behavior or UI defect" },
    { id: "Crash", label: "Crash / Freeze", desc: "App closes unexpectedly or stops responding" },
    { id: "Battery", label: "Battery Drain", desc: "Excessive background or foreground power draw" },
    { id: "Heating", label: "Overheating", desc: "Device warms significantly during use" },
    { id: "Performance", label: "Performance / Lag", desc: "Stuttering, slow loading, or frame drops" },
    { id: "Privacy", label: "Privacy Concern", desc: "Unexpected tracking or permission query" },
    { id: "Other", label: "Other", desc: "Any other notable experience" }
  ]
};

// Expose globally
window.APPLENS_DATA = APPLENS_DATA;
