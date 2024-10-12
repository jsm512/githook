module.exports = {
    types: [
        { value: 'feat', name: 'feat: ✨ 새로운 기능 추가' },
        { value: 'fix', name: 'fix: 🐛 버그 수정' },
        { value: 'docs', name: 'docs: 📚 문서만 변경' },
        { value: 'style', name: 'style: 💎 코드 의미에 영향을 미치지 않는 변경사항' },
        { value: 'refactor', name: 'refactor: 📦 코드 리팩토링' },
        { value: 'perf', name: 'perf: 🚀 성능 개선' },
        { value: 'test', name: 'test: 🚨 테스트 추가 또는 수정' },
        { value: 'build', name: 'build: 🛠 빌드 시스템 변경 또는 외부 종속성 추가' },
        { value: 'ci', name: 'ci: ⚙️ CI 설정 변경' },
        { value: 'chore', name: 'chore: ♻️ 기타 변경사항' },
        { value: 'revert', name: 'revert: 🗑 커밋 되돌리기' }
    ],
    scopes: [],
    allowCustomScopes: true,
    allowBreakingChanges: ["feat", "fix"]
};
