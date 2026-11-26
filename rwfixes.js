// rwfixes.js: repairs for Reading & Writing questions, applied as they load (the question server's copy can't be
// edited from the site, so test.html and drill.html fix what it sends; the local banks are fixed the same way).
//   RWFix.apply(q) fixes q in place and returns it.
// 1. Choice D missing in five Command of Evidence (graph) questions. The text is rebuilt from the graph and the
//    official explanation of choice D, so the meaning matches; the wording may differ from the original.
// 2. Apostrophes lost in transcription: "student s claim" → "student’s claim", "don t" → "don’t".
// 3. Accented words split by a space: "Rinc ón" → "Rincón", "Vel ázquez" → "Velázquez".
(function () {
  var CHOICE_D = {
    '2df730d0': 'The majority of turbines installed in 2011 had rotor diameters of less than 100 meters, whereas the majority of turbines installed in 2021 had rotor diameters of 115–130 meters.',
    '3430be35': 'the prices chosen by the students varied far more widely than the prices chosen by the group recruited online, regardless of the message the participants received.',
    '702eb7e3': 'was substantially lower than uncertainty about trade policy in 2005 but substantially higher than uncertainty about trade policy in 2010.',
    '1703403b': 'Rincón and Isabela have a similar average rainfall, as do Ponce and San Sebastián.',
    '8a584241': 'at 48 hours, more than 90% of seeds treated with H₂S at a concentration of 10 micromoles per liter had germinated, whereas less than 30% of untreated seeds had germinated.'
  };
  var L = 'A-Za-zÀ-ÖØ-öø-ÿĀ-žḀ-ỿ';
  var RE_S = new RegExp('([' + L + ']) s(?=[\\s.,;:!?)”"—–-]|$)', 'g');
  var RE_NT = new RegExp('\\b(do|does|did|is|are|was|were|has|have|had|ca|could|would|should|wo|might|must|need|ai)n t\\b', 'gi');
  var RE_CTR = new RegExp('\\b(I|you|we|they|You|We|They|who|Who|that|That|there|There|it|It|he|He|she|She|what|What) (re|ve|ll|d|m)\\b', 'g');
  var RE_ACC = new RegExp('([' + L + ']*[a-zà-öø-ÿ]) ([áéíóúñãõâêôç][a-zà-öø-ÿ])', 'g');
  var KEEP = /^(and|or|the|of|in|on|a|an|to|de|del|el|la|las|los|y|e|o|en|con|por|para|que)$/i;
  function fixText(t) {
    if (typeof t !== 'string' || !t) return t;
    return t.replace(RE_ACC, function (m, w, r) { return KEEP.test(w) ? m : w + r; }).replace(RE_NT, '$1n’t').replace(RE_S, '$1’s')
      .replace(RE_CTR, function (m, w, c) { return (c === 'd' || c === 'm') && !/^(I|you|we|they|he|she|it|You|We|They|He|She|It)$/.test(w) ? m : w + '’' + c; });
  }
  function apply(q) {
    if (!q || q.__rwfixed) return q;
    if (CHOICE_D[q.id] && Array.isArray(q.choices) && !String(q.choices[3] || '').trim()) q.choices[3] = CHOICE_D[q.id];
    q.question = fixText(q.question);
    if (Array.isArray(q.choices)) q.choices = q.choices.map(fixText);
    if (q.rationale) q.rationale = fixText(q.rationale);
    if (Array.isArray(q.passage_lines)) q.passage_lines.forEach(function (l) { if (l && l.type === 'line') l.text = fixText(l.text); });
    try { Object.defineProperty(q, '__rwfixed', { value: true }); } catch (e) {}
    return q;
  }
  var api = { apply: apply, fixText: fixText, choiceD: CHOICE_D };
  if (typeof window !== 'undefined') window.RWFix = api;
  if (typeof module !== 'undefined') module.exports = api;
})();
