# Harness2

> 모델은 그대로 두고 지시문·도구·작업 절차를 고치는 연구입니다. 두 층의 개선 구조와 논문 수치를 읽고, Windows 원본 데모가 어디서 멈추는지 확인했습니다.

- 수치: 개선 방법도 기록
- 사람이 보는 화면: https://aitryed.com/ko/teardowns/harness/harness2/
- 반대 언어: https://aitryed.com/en/teardowns/harness/harness2/index.md
- 저장소: https://github.com/google-research/harness2
- 출처(arxiv.org/abs/2610.14224): https://arxiv.org/abs/2610.14224
- 이 사이트 안내(AI용): https://aitryed.com/ko/llms.txt

---

**Harness2는 AI 모델을 다시 학습시키지 않고, 모델이 일하는 방법을 고치는 연구 프레임워크입니다.** 지시문, 쓸 수 있는 도구, 기억, 작업 순서를 묶어 「하네스」라고 부릅니다. 같은 모델도 어떤 하네스 위에서 일하느냐에 따라 결과가 달라진다는 데서 출발합니다.

이 연구는 일을 여러 방식으로 해 본 뒤 작업 매뉴얼을 고칩니다. **그 매뉴얼을 어떻게 고쳤는지도 다음 과제에 남깁니다.** 논문은 성능 향상을 보고하지만, 제가 직접 실행한 Windows 데모는 완료하지 못했습니다. 아이디어와 구현을 읽은 결과, 저자 수치, 직접 해 본 결과를 나눠 기록했습니다.

> **[도판]** 위층은 지금 일을 푸는 방법을 고친다. 아래층은 그 수정 경험을 쌓는다. 실행 비교와 정답을 이용한 사후 평가는 서로 다른 단계다.
>
> Harness2의 두 층. 현재 과제는 기본 하네스로 실행한 뒤 후보 제안, 실행 대조, 합성을 거쳐 최종 후보를 고른다. 성공한 선택과 근거 있는 회고는 경험 라이브러리에 남고 다음 과제의 개선에 선택적으로 쓰인다. 모델 가중치는 고정된다.

## AI에게 새 지식보다 다른 작업 매뉴얼을 줍니다

AI가 문서를 만들었는데 필요한 항목을 빠뜨렸다고 하겠습니다. 모델을 다시 학습시키는 대신, 「쓰기 전에 항목을 확인하라」는 지시를 붙이거나 확인용 스크립트를 제공할 수 있습니다. Harness2가 수정하는 것은 이런 실행 조건입니다.

대상은 프롬프트 한 줄보다 넓습니다. 도구를 언제 쓸지, 일을 하위 에이전트에게 어떻게 나눌지, 어떤 스킬과 스크립트를 둘지도 고칩니다. **모델의 가중치를 고정한다는 말이 주변 장치까지 고정한다는 뜻은 아닙니다.**

## 이번 일의 수정과 다음 일을 위한 기억을 나눕니다

첫째는 현재 과제의 개선입니다. 기본 실행을 보고 후보를 만든 뒤, 같은 일을 후보로 다시 해 봅니다. 결과와 작업 흔적을 비교해 지지되는 변경을 합칩니다. 원래 방법을 유지할 수도 있습니다.

둘째는 그 경험의 저장입니다. 어떤 상황에서 무엇을 바꿨고, 근거가 무엇이었는지 남깁니다. 다음 과제는 기본 하네스로 출발하되 이 기록을 개선할 때 참고합니다. **직전 승자를 모든 다음 일에 그대로 덮어씌우지는 않습니다.**

## 「스스로 개선」이 「항상 더 좋아짐」은 아닙니다

이 과정은 개선 중에 정답이나 채점표를 받지 않습니다. 그래서 「요구한 파일이 생겼다」, 「빠진 항목을 더 다뤘다」 같은 흔적으로 후보를 판단합니다. 그 판단도 틀릴 수 있습니다.

논문의 성능은 나중에 별도로 채점한 값입니다. 기본 설정에서는 최종 후보가 하나면 별도 선택 모델의 비교 없이 넘어가기도 합니다. **후보를 만들었다는 사실과 원본보다 좋아졌다는 증거는 구분해야 합니다.**

## 제 환경에서는 완주부터 남았습니다

Windows에서 인증 없는 데모를 두 모드로 실행했습니다. 작은 Python 프로그램들은 실제로 돌았지만, 각 모드의 두 과제 모두 실패로 끝났습니다. 최종 채택 결과도 없었습니다.

공식 전제는 Linux입니다. 따라서 이 결과로 연구 성능을 부정할 수는 없고, 제 환경에서 성공했다고 말할 수도 없습니다. 현재 판정은 **도입 보류**입니다. Linux 원본 워크플로와 독립 평가가 먼저입니다.

## 여기부터는 자세한 기록입니다

2026-10-19의 [커밋 1cfe254](https://github.com/google-research/harness2/tree/1cfe254e8d25b15f37048c3730134686abe60335)을 읽었습니다. 패키지는 `0.1.0`, 논문은 [arXiv v1](https://arxiv.org/html/2610.14224v1)입니다. Google Research 저장소의 연구이며 README는 공식 지원 Google 제품이 아니라고 명시합니다.

## 여덟 수정 요소를 파일로 만들고 실행 증거로 대조합니다

OpenCode 표면은 다음 여덟 역할로 나뉩니다. Codex에서는 상시 텍스트가 `AGENTS.md`에 합쳐지고 plugins 대신 hooks 등 대응 표면을 씁니다. 이름이 같다고 파일 배치까지 같지는 않습니다. [수정 표면](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/prompts.py#L98-L124)

| 역할 | 수정하는 내용 |
|---|---|
| 시스템 프롬프트 · 가드레일 | 기본 행동과 제약 |
| 장기 메모리 · 도구 지침 | 기억할 내용과 도구 사용법 |
| 하위 에이전트 · 스킬 | 일을 나누는 방식과 필요할 때 읽을 절차 |
| 스크립트 · 플러그인 | 실행 가능한 보조 코드와 도구 루프 구성 |

범용 후보는 에이전트의 일반적인 문제를 고치고, 영역별 후보는 현재 업무의 절차와 제약에 맞춥니다. 합성기는 둘을 무조건 합치지 않습니다. 실행 증거를 보고 일부만 채택하거나 기존 하네스를 보존할 수 있습니다. [논문 §2.2.1](https://arxiv.org/html/2610.14224v1#S2.SS2.SSS1)

## k는 API 호출 수보다 실행 계획에 가깝습니다

새로운 단일 모드의 정상 계획은 과제당 `4k` 실행 슬롯과 `3k` 개선 단계입니다. `k=2`라면 기본 실행 2개, 후보 실행 4개, 합성본 실행 2개로 **8슬롯**입니다. parallel은 같은 기본 증거에서 후보를 나란히 만들고, sequential은 직전 합성본에서 다음 개선을 이어 갑니다.

선택·회고·채점·재시도는 별도로 봐야 합니다. 같은 `run_task`에서 두 모드를 함께 돌리면 기본 실행 두 개를 공유하므로 고유 슬롯은 14개입니다. 이번 실측처럼 새 실행을 두 번 시작한 경우와 다릅니다. **슬롯 수를 모델 요청 수나 비용 배수로 바꾸지 않았습니다.** [스케줄](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/schedule.py#L619-L648), [재귀 구현](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/recursion.py#L343-L565)

## 최종 선택은 원본 대비 향상 게이트가 아닙니다

기본 `finals` 풀에는 합성본들만 들어갑니다. 기본 실행을 별도 최종 후보로 넣지 않습니다. `k=1`에서 유효한 final 하나가 남으면 selector 모델 세션 없이 선택합니다. **그래서 최종 선택만으로 원본보다 좋아졌음을 입증할 수 없습니다.** 합성기가 원본을 보존할 수 있다는 사실과는 양립합니다. [선택 풀](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/selection.py#L93-L111), [단일 후보](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/selection.py#L360-L398)

선택 실패의 fallback도 정상 성공과 다릅니다. 그 경로는 `ok=True`로 바뀌지 않습니다. 라이브러리에는 선택이 성공하고 `cue`, `lesson`, `evidence`를 갖춘 회고가 있을 때 채택 트리와 경험을 추가합니다. 결과 파일의 존재를 학습 성공으로 세면 안 됩니다. [저장 조건](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/schedule.py#L529-L563)

## 최대 개선 세 개는 모델도 단위도 다릅니다

아래는 **저자 보고의 k=1 최대 증가**입니다. 각각 해당 모델의 기본 하네스와 비교한 값이며, 제가 재현한 수치가 아닙니다. [Table 1](https://arxiv.org/html/2610.14224v1#S3.T1), [Table 2](https://arxiv.org/html/2610.14224v1#S3.T2)

| 벤치마크와 모델 / 실행 체계 | 기본 → Harness2 | 증가 |
|---|---|---|
| WorkBuddy 평균 · GLM-5 / OpenCode | 64.2 → 75.7 | +11.5점 |
| JobBench · Gemini 3.5 Flash / OpenCode | 31.5 → 36.0 | +4.5점 |
| LAB Partial · GLM-5 / OpenCode | 59.6% → 71.4% | +11.8%p |

LAB Partial은 기준별 통과 비율이며 과제 전체 성공률이 아닙니다. 개선 중에는 정답 피드백을 주지 않고, 채점은 별도 verifier와 judge로 수행합니다. 논문 자체도 후보 선택 실패와 퇴행을 싣고 있습니다. 최종 executor의 `#Steps`만으로 전체 비용을 판단할 수도 없습니다. 후보 실행과 편집에 든 계산까지 포함해야 합니다. [평가 구성](https://arxiv.org/html/2610.14224v1#A2), [실패 사례](https://arxiv.org/html/2610.14224v1#A5.SS6), [전체 토큰 비교](https://arxiv.org/html/2610.14224v1#S4.F6)

## 로컬 Python 32회는 개선 성공 32회가 아닙니다

Windows / Python 3.13.12에서 원본을 수정하거나 설치하지 않고, parallel `k=2`와 sequential `k=2`를 별도 새 출력 위치에서 실행했습니다. **각각 exit 1, 완료 0·실패 2과제**였습니다. 모드마다 로컬 Python 실행 16회와 scripted editor 호출 24회가 집계됐습니다. 원격 모델은 부르지 않았습니다.

최종 예외는 POSIX 전용 `fcntl`의 부재였습니다. 그 전에 원본 `read_tree`에서 Windows 경로 구분자로 README stub 네 개가 거절되는 현상도 확인했습니다. 실행 답은 수정 전 합계인 105.25 / 35.50에 머물렀고, 최종 `summary.json`이나 채택 승자는 없었습니다. 저장만 실패한 성공 실험으로 읽을 근거가 없습니다. [경로 처리](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/tree.py#L127-L148), [locking](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/core/schedule.py#L289-L329)

원본 workflow 파일의 5개 test method도 실행했지만 실패했습니다. 출력의 failure 4·error 3은 subtest를 포함하므로 7개 테스트라는 뜻이 아닙니다. 실행 중인 Linux Docker daemon은 없어 Linux 추가 재현은 하지 않았습니다. **이 관찰은 Windows의 미완주 결과이며 지원 Linux의 실패 판정이 아닙니다.** 데모 자체도 정해진 로컬 편집기를 쓰므로 범용 모델의 개선 능력을 측정하는 시험이 아닙니다. [원본 tests](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/tests/test_workflow.py), [데모 구현](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/harness2/demo.py#L86-L163)

> **[도판]** 실측의 Python 32회는 별도 fresh 실행 두 번의 합이다. 실제 모델 호출 수나 성공한 개선 횟수를 뜻하지 않는다.
>
> 검증 범위. 논문은 세 벤치마크의 향상을 보고했다. 이번 Windows 실측은 두 모드 각각 완료 0과제, 로컬 Python 16회이며 최종 선택이 없다. Linux와 실제 모델 및 논문 성능은 재현하지 않았다.

## 채점표를 안 주는 것만으로 외부 접근이 막히지는 않습니다

공식 실험 가이드는 **릴리스 검증 중 Codex JobBench rollout이 공개 `RUBRICS.json`을 내려받은 사례**를 기록합니다. 공개 릴리스는 네트워크를 제한하지 않습니다. Codex 실행 인자는 sandbox 우회도 포함하므로 파일 유효성 검사를 실행 격리로 읽으면 안 됩니다. [web access](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/docs/EXPERIMENTS.md#web-access), [Codex 인자](https://github.com/google-research/harness2/blob/1cfe254e8d25b15f37048c3730134686abe60335/third_party/lab_runner/adapt_runs_cx/run_codex_lab.py#L292-L310)

이 사례가 논문 표를 만든 run과 같다는 근거는 확인하지 못했습니다. 논문 전체가 오염됐다고 단정하지 않습니다. 다만 독립 재현에는 데이터 revision과 split뿐 아니라 외부 접근 제한과 기록도 필요합니다. 정답을 입력에 안 넣는 조건과 실행자가 다른 경로로 못 얻는 조건은 따로 확인해야 합니다.

## 가져갈 것은 변경과 근거를 함께 저장하는 방식입니다

하네스 파일만 남기면 왜 바꿨는지 사라집니다. Harness2가 채택 트리와 적용 조건·교훈·실행 증거를 함께 저장하는 방식은 개선 이력을 읽는 데 유용합니다. 이것이 이번 수확입니다.

제 QA에서는 지원 Linux의 원본 완주를 먼저 확인하고, 정답을 분리한 작은 과제로 기존 방법과 후보를 비교할 필요가 있습니다. 전체 비용과 퇴행도 함께 재야 합니다. **이번에는 QA에 연결하거나 판정 정확도를 높인 실험을 하지 않았습니다.** 도입 효과는 다음 검증으로 남깁니다.
