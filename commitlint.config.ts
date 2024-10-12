import {
    RuleConfigCondition,
    RuleConfigSeverity,
    TargetCaseType,
} from '@commitlint/types';

export default {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        'body-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
        'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100] as const,
        'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
        'footer-max-line-length': [
            RuleConfigSeverity.Error,
            'always',
            100,
        ] as const,
        'header-max-length': [RuleConfigSeverity.Error, 'always', 100] as const,
        'header-trim': [RuleConfigSeverity.Error, 'always'] as const,
        'subject-case': [
            RuleConfigSeverity.Error,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ] as [RuleConfigSeverity, RuleConfigCondition, TargetCaseType[]],
        'subject-empty': [RuleConfigSeverity.Error, 'never'] as const,
        'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'] as const,
        'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'] as const,
        'type-empty': [RuleConfigSeverity.Error, 'never'] as const,
        'type-enum': [
            RuleConfigSeverity.Error,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ] as [RuleConfigSeverity, RuleConfigCondition, string[]],
    },
    prompt: {
        questions: {
            type: {
                description: "변경사항 선택",
                enum: {
                    feat: {
                        description: 'A new feature',
                        title: 'Features',
                        emoji: '✨',
                    },
                    fix: {
                        description: 'A bug fix',
                        title: 'Bug Fixes',
                        emoji: '🐛',
                    },
                    docs: {
                        description: 'Documentation only changes',
                        title: 'Documentation',
                        emoji: '📚',
                    },
                    style: {
                        description:
                            'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
                        title: 'Styles',
                        emoji: '💎',
                    },
                    refactor: {
                        description:
                            'A code change that neither fixes a bug nor adds a feature',
                        title: 'Code Refactoring',
                        emoji: '📦',
                    },
                    perf: {
                        description: 'A code change that improves performance',
                        title: 'Performance Improvements',
                        emoji: '🚀',
                    },
                    test: {
                        description: 'Adding missing tests or correcting existing tests',
                        title: 'Tests',
                        emoji: '🚨',
                    },
                    build: {
                        description:
                            'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
                        title: 'Builds',
                        emoji: '🛠',
                    },
                    ci: {
                        description:
                            'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
                        title: 'Continuous Integrations',
                        emoji: '⚙️',
                    },
                    chore: {
                        description: "Other changes that don't modify src or test files",
                        title: 'Chores',
                        emoji: '♻️',
                    },
                    revert: {
                        description: 'Reverts a previous commit',
                        title: 'Reverts',
                        emoji: '🗑',
                    },
                },
            },
            scope: {
                description:
                    '변경된 파일 or 폴더',
            },
            subject: {
                description:
                    '짧은 설명 ex. 로그인 기능 추가',
            },
            body: {
                description: '추가 설명',
            },
            isBreaking: {
                description: 'Are there any breaking changes?',
            },
            breakingBody: {
                description:
                    'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
            },
            breaking: {
                description: 'Describe the breaking changes',
            },
            isIssueAffected: {
                description: '이번 변경사항으로 영향 받은 #issue가 있나요?',
            },
            issuesBody: {
                description:
                    '영향 받은 #issue에 대한 설명',
            },
            issues: {
                description: '영향 받은 #issue 번호 (ex. fix: #1)',
            },
        },
    },
};
