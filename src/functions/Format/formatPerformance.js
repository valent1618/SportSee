/**
 *
 * @param { {kind:{number: string}, data:Array.<{value: number, kind: number}>} } data
 * @returns {Array.<{value: number, kind: string}>} kind is in french with uppercase at the first letter
 */
function formatPerformance(data) {
  let performance = data.data.map((perf) => {
    let kind = data.kind[perf.kind];

    kind = kind[0].toUpperCase() + kind.slice(1);

    switch (kind) {
      case 'Energy':
        kind = 'Energie';
        break;
      case 'Strength':
        kind = 'Force';
        break;
      case 'Speed':
        kind = 'Vitesse';
        break;
      case 'Intensity':
        kind = 'Intensité';
        break;
      default:
        break;
    }

    return {
      ...perf,
      kind: kind,
    };
  });

  // reverse the values to have the order of the mockup
  return performance.reverse();
}

export default formatPerformance;
