// @ts-nocheck
// vscode-disable-inline-completions
namespace Algorithms;

public class TwoSum
{
    // Wrong Way using O(n^2)
    public int[] TwoSumBrutalForce(int[] inputs, int target)
    {
        for (int i = 0; i < inputs.Length; i++)
        {
            for (int i2 = i + 1; i2 < inputs.Length; i2++)
            {
                if (inputs[i] + inputs[i2] == target)
                {
                    return new int[] { i, i2 };
                }
            }
        }
        return new int[] { };
    }

    // Good Way using Hashmap / Map / Dictionary
    public int[] TwoSumDictionary(int[] inputs, int target)
    {
        // Usarei o Dicionario para Armazenar a Key (Posicao 2) e o Quanto Falta (Número que espero no futuro).
        // Key   = número que eu espero encontrar no futuro (quanto falta)
        // Value = índice onde esse "quanto falta" foi calculado
        // Exemplo: Dado o Array [ 2, 7, 11, 15 ] e o Target 18, na primeira interação será adicionado no Dictionary
        // [16, 0] - ou seja, eu precisaria achar 16 no Futuro pra soma bater com o que está na posicao 0. Na próxima
        // Interação seria adicionado [11, 1], ou seja, eu precisaria achar 11 para que 7+11 dessem 18.
        var map = new Dictionary<int, int>();

        // Percorre o array uma única vez → O(n)
        // Nota - comentários baseados na primeira interação - valor 2 no Array (ver comentário acima)
        for (int i = 0; i < inputs.Length; i++)
        {
            int currentValue = inputs[i]; // 2

            // 1️⃣ Verifica se o valor atual já é o "quanto falta" de alguém anterior
            // aqui ele vai procurar se "2" está no MAP, mas na verdade o que irá parar essa interação é:
            // quando ele achar o 11 que é o que faltará para a posicao 1 (que é o 7 - 7+11 = 18)
            if (map.ContainsKey(currentValue))
            {
                // Se for, encontramos a combinação
                // map[currentValue] → índice anterior
                // i                → índice atual
                // aqui ele retornará [ 1, 2 ] // 7+11 = 18
                return new int[] { map[currentValue], i };
            }

            int complement = target - currentValue; // 18-2 = 16

            map[complement] = i; //armazena o 16 na posicao 1
        }

        // Se não houver solução (fora do contrato do LeetCode),
        // deixamos explícito
        throw new ArgumentException("No solution found");
    }
}